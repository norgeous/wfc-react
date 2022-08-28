importScripts('https://unpkg.com/@babel/standalone@7.18.12/babel.min.js');

const CACHE_PREFIX = 'WFC_REACT';
const CACHE_VERSION = '1.0.0'; // increase to invalidate old caches on clientside
const CACHE_NAME = `${CACHE_PREFIX}_${CACHE_VERSION}`;
const isDev = location.hostname === 'localhost';
const scope = self.registration.scope.replace(location.origin, '');

const getCache = () => caches.open(CACHE_NAME);

const setupCache = async() => {
  const keyList = await caches.keys();
  return Promise.all(keyList.map(key => {
    if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
      console.log('Deleting old cache :', key);
      return caches.delete(key);
    }
  }));
};

const getUrl = request => {
  const url = new URL(request.url);
  url.isSelfHosted = url.host === location.host;
  url.isRoot = scope === url.pathname;
  url.ext = url.pathname.includes('.') ? url.pathname.split('.').pop() : undefined;

  // auto append .js to all local files which dont have an ext already (ignoring the index.html)
  if (url.isSelfHosted && !url.isRoot && !url.ext) {
    url.pathname = `${url.pathname}.js`;
    url.ext = 'js';
  }

  return url;
};

const handleRequest = async request => {
  const url = getUrl(request);

  const cachedResponse = await caches.match(request);
  const cachedResponse2 = await caches.match(url);
  console.log({cachedResponse,cachedResponse2});
  if (cachedResponse) { 
    console.info('✅ CACHE HIT  :', request.url);
    return cachedResponse;
  }
  
  console.info('❌ CACHE MISS :', request.url);

  const cache = await getCache();
  cache.add(request.url);
  // cache.add(url);
  
  const response = await fetch(url).catch(e => {
    console.error(url);
    console.error(e);
  });

  // self hosted files are "basic", cross-origin files are "opaque"
  if (response.type !== 'basic') return response;

  // transpile self hosted js files using react preset
  if (response.status === 200 && url.ext === 'js') {
    const text = await response.text();
    const { code } = Babel.transform(text, { presets: ['react'] });
    return new Response(code, response);
  }

  // exit point for all other self hosted file types (such as svg, css, etc)
  return response;
};

self.addEventListener('activate', event => event.waitUntil(clients.claim()));
self.addEventListener('activate', event => event.waitUntil(setupCache()));
self.addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
