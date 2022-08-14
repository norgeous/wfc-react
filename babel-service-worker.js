importScripts(
  'https://unpkg.com/@babel/standalone@7.18.12/babel.min.js',
);

async function handleRequest(request) {
  const url = new URL(request.url);

  const isSelfHosted = url.host === location.host;
  const isSrc = url.pathname.startsWith('/src/');
  url.ext = url.pathname.includes('.') ? url.pathname.split('.').pop() : undefined;

  if (isSelfHosted && isSrc && !url.ext) {
    url.pathname = `${url.pathname}.js`;
    url.ext = 'js';
  }

  const response = await fetch(url);
  const { status } = response;

  // transpile /src/ files
  if (status === 200 && isSelfHosted && isSrc && url.ext === 'js') {
    const text = await response.text();
    const { code } = Babel.transform(text, { presets: ['react'] });
    return new Response(code, response);
  }

  return response;
}

self.addEventListener('fetch', e => e.respondWith(handleRequest(e.request)));
