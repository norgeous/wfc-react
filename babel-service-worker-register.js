navigator.serviceWorker.register('/babel-service-worker.js', { scope: '/' });

navigator.serviceWorker.ready.then(() => {
  if (!navigator.serviceWorker.controller) window.location.reload(); // https://stackoverflow.com/a/62596701

  const tag = '<script type="module" src="./src/index.js" />';
  document.body.insertAdjacentHTML('beforeend', tag);
});
