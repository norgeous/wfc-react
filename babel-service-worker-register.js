// https://github.com/babel/babel/discussions/12059

const onError = (err) => {
  console.error('Error registering service-worker:', err)
  document.getElementById('root').innerText = err.toString()
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/babel-service-worker.js', {scope: '/'})
  .then(registration => {
      window.serviceWorkerRegistration = registration;
      // console.log('sw registered');
      // window.serviceWorkerRegistration.unregister(); // to unregister the service worker
    })
    .catch(onError)
} else {
  onError('Browser does not support service workers :-(')
}