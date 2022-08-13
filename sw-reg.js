(async () => {
  try {
    const registration = await navigator.serviceWorker.register('sw.js');
    await navigator.serviceWorker.ready;
    
    // this launches the React app if the SW has been installed before or immediately after registration
    const launch = async () => import('./src/index.jsx');
    
    // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
    if (navigator.serviceWorker.controller) {

      console.log('launch?');
      // const x = await launch();
      console.log('launchafter?', await launch());
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', launch);
    }
  } catch (error) {
    console.error('Service worker registration failed');
    console.error(error);
  }
})();
