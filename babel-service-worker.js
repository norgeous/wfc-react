importScripts(
  'https://unpkg.com/@babel/standalone@7.18.12/babel.min.js',
);

const handleRequest = async (request) => {
  const url = new URL(request.url);

  const isSelfHosted = url.host === location.host;
  const isRoot = url.pathname === '/';
  url.ext = url.pathname.includes('.') ? url.pathname.split('.').pop() : undefined;

  if (isSelfHosted && !isRoot && !url.ext) {
    url.pathname = `${url.pathname}.js`;
    url.ext = 'js';
  }

  const response = await fetch(url, {
    mode: url?.ext === 'png' ? 'no-cors' : 'cors', // disable hotlink blocking?
  }).catch(e => {
    console.error(url);
    console.error(e);
  });

  // transpile self hosted js files using react preset
  if (response.status === 200 && isSelfHosted && url.ext === 'js') {
    const text = await response.text();
    const { code } = Babel.transform(text, { presets: ['react'] });
    return new Response(code, response);
  }

  return response;
};

self.addEventListener('activate', event => event.waitUntil(clients.claim()));
self.addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
