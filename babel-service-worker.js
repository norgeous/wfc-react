// transpile JSX using babel so it can be run in the browser, you don't need to edit this
// if you do edit this file, call `await window.serviceWorkerRegistration.unregister()` in the browser to update it

async function getBabel() {
  console.log('jsx service worker: loading babel-standalone from unpkg.com');
  const r = await fetch('https://unpkg.com/@babel/standalone/babel.min.js');
  eval(await r.text());
}

const modifyUrl = (url) => {
  const { host, pathname } = new URL(url);
  if (host === location.host && pathname.startsWith('/src/') && !pathname.endsWith('.js')) {
    return new URL(`${pathname}.js`, url).toString();
  }

  return url.toString();
};


async function handleRequest(request) {
  const url = new URL(modifyUrl(request.url));
  // console.log('sw fetching', url.toString())
  const r = await fetch(url);

  // console.log('jsx service worker: got', {r});

  if (r.status === 200 & url.host === location.host && url.pathname.endsWith('.js')) {
    const jsx = await r.text();
    const js = Babel.transform(jsx, {presets: ['react']}).code;
    return new Response(js, r);
  } else {
    return r;
  }
}

self.addEventListener('install', e => e.waitUntil(getBabel()));
self.addEventListener('fetch', e => e.respondWith(handleRequest(e.request)));
