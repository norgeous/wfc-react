importScripts(
  'https://unpkg.com/@babel/standalone@7.18.12/babel.min.js',
);

const handleRequest = async (request) => {
  const url = new URL(request.url);

  const isSelfHosted = url.host === location.host;
  const isRoot = url.pathname === '/';
  url.ext = url.pathname.includes('.') ? url.pathname.split('.').pop() : undefined;

  console.log(url.pathname);

  if (isSelfHosted && !isRoot && !url.ext) {
    url.pathname = `${url.pathname}.js`;
    url.ext = 'js';
  }

  const response = await fetch(url);//.catch(console.info);

  // transpile /src/ files
  if (response.status === 200 && isSelfHosted && url.ext === 'js') {
    const text = await response.text();
    const { code } = Babel.transform(text, { presets: ['react'] });
    return new Response(code, response);
  }

  return response;
}

// self.addEventListener('install', e => e.waitUntil(getBabel()));
self.addEventListener('activate', event => event.waitUntil(clients.claim()));
self.addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
