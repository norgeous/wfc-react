// https://medium.com/disdj/react-jsx-es-module-imports-dynamic-too-in-browser-without-webpack-9cf39520f20f

importScripts(
  // 'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://unpkg.com/@babel/standalone@7.18.12/babel.min.js',
  // 'https://unpkg.com/@babel/plugin-syntax-dynamic-import',
  // 'https://unpkg.com/@babel/plugin-syntax-dynamic-import@7.8.3/lib/index.js',
);

//this is needed to activate the worker immediately without reload
//@see https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
self.addEventListener('activate', event => event.waitUntil(clients.claim()));

const globalMap = {
  'react': 'React',
  'react-dom': 'ReactDOM'
};

const getGlobalByUrl = (url) => Object.keys(globalMap).reduce((res, key) => {
  if (res) return res;
  if (matchUrl(url, key)) return globalMap[key];
  return res;
}, null);

const matchUrl = (url, key) => url.includes(`/${key}/`);

self.addEventListener('fetch', (event) => {
  console.log('sw.js got a fetech', event);
  let {request: {url}} = event;
  console.log('Req', url);
  const fileName = url.split('/').pop();
  const ext = fileName.includes('.') ? url.split('.').pop() : '';
  
  if (!ext && !url.endsWith('/')) {
    // url = url + '.jsx';
  }
  if (globalMap && Object.keys(globalMap).some(key => matchUrl(url, key))) {
    console.log('in global map:', url);
    event.respondWith(
      fetch(url)
        .then(response => response.text())
        .then(body => new Response(`
          const head = document.getElementsByTagName('head')[0];
          const script = document.createElement('script');
          script.setAttribute('type', 'text/javascript');
          script.appendChild(document.createTextNode(
            ${JSON.stringify(body)}
          ));
          head.appendChild(script);
          export default window.${getGlobalByUrl(url)};
        `, {
          headers: new Headers({
            'Content-Type': 'application/javascript'
          })
        })
      )
    );
  } else if (url.endsWith('.js')) { // rewrite for import('./Panel') with no extension
    console.log('.js rewrite:', url);
    event.respondWith(
      fetch(url)
        .then(response => response.text())
        .then(body => new Response(
          body,
          {
            headers: new Headers({
              'Content-Type': 'application/javascript'
            })
        })
      )
    )
  } else if (url.endsWith('.jsx')) {
    console.log('jsx case:', url);
    event.respondWith(
      fetch(url)
        .then(response => response.text())
        .then(body => {
          console.log(Babel)
          const js = Babel.transform(body, {
            presets: [
              // 'env',
              'react',
              // 'stage-3',
            ],
            // plugins: [
            //   'transform-modules-amd',
            //   'syntax-dynamic-import',
            // ],
            sourceMaps: true
          }).code;//.replace(/require/g,'import');
          
          console.log(js);
          return new Response(js, { 
            headers: new Headers({
              'Content-Type': 'application/javascript'
            }),
          });
        })
    );
  }

});