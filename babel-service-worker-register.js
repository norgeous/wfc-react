const { pathname } = window.location;

const load = (uri) => {
  const tag = `<script type="module" src="${uri}" />`;
  document.body.insertAdjacentHTML('beforeend', tag);
};

const loadIndex = () => load('./src/index');

(async () => {
  await navigator.serviceWorker.register(`${pathname}babel-service-worker.js`, { scope: pathname });
  await navigator.serviceWorker.ready;
  if (!navigator.serviceWorker.controller) {
    window.location.reload(); // https://stackoverflow.com/a/62596701
    // navigator.serviceWorker.addEventListener('controllerchange', loadIndex); 
  } else {
    loadIndex();
  }
})();
