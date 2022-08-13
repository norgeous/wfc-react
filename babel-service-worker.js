// transpile JSX using babel so it can be run in the browser, you don't need to edit this
// if you do edit this file, call `await window.serviceWorkerRegistration.unregister()` in the browser to update it

async function getBabel() {
  // console.log('jsx service worker: loading babel-standalone from unpkg.com');
  const r = await fetch('https://unpkg.com/@babel/standalone/babel.min.js');
  eval(await r.text());
}

async function handleRequest(request) {
  const url = new URL(request.url);

  const isSelfHosted = url.host === location.host;
  const isSrc = url.pathname.startsWith('/src/');
  url.ext = url.pathname.includes('.') ? url.pathname.split('.').pop() : undefined;

  if (isSelfHosted && isSrc && !url.ext) {
    url.pathname = `${url.pathname}.js`;
    url.ext = 'js';
  }

  // console.log({
  //   url: url.toString(),
  //   isSelfHosted,
  //   isSrc,
  //   ext: url.ext,
  // });

  const response = await fetch(url);
  const { status } = response;

  // transpile /src/ files
  if (status === 200 && isSelfHosted && isSrc && url.ext === 'js') {
    const text = await response.text();
    // console.log(Babel);
    const { code } = Babel.transform(text, { presets: ['react'] });
    return new Response(code, response);
  }

  return response;
}

self.addEventListener('install', e => e.waitUntil(getBabel()));
self.addEventListener('fetch', e => e.respondWith(handleRequest(e.request)));
