export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(reg => {
            console.log('Service Worker registered:', reg);
            reg.onupdatefound = () => {
              const installing = reg.installing;
              installing.onstatechange = () => {
                if (installing.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // new update available
                    console.log('New or updated content is available.');
                    // you could prompt the user to refresh here
                  } else {
                    // first install
                    console.log('Content is now available offline!');
                  }
                }
              };
            };
          })
          .catch(err => console.error('SW registration failed:', err));
      });
    }
  }
  