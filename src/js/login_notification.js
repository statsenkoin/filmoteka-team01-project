import { refs } from './references';
export let isLogedIn = false;
export let intervalId = null;

document.addEventListener('DOMContentLoaded', loginNotification);
function loginNotification() {
  let ALERT_AMOUNT = 0;
  const NOTIFICATIONS_AMOUNT = 10000;
  intervalId = setInterval(() => {
    if (ALERT_AMOUNT === 3) {
      clearInterval(intervalId);
    }
    ALERT_AMOUNT += 1;

    refs.authModal.classList.add('active');
    refs.overlay.classList.add('active');
    document.addEventListener('keydown', event => {
      if (event.code !== 'Escape') {
        return;
      } else {
        Array.from(refs.modals).forEach(modal => {
          modal.classList.remove('active');
        });
        refs.overlay.classList.remove('active');
      }
    });

    refs.overlay.addEventListener('click', () => {
      Array.from(refs.modals).forEach(modal => {
        modal.classList.remove('active');
      });
      refs.overlay.classList.remove('active');
    });
  }, NOTIFICATIONS_AMOUNT);

  if (ALERT_AMOUNT === 3 || isLogedIn === true) {
    clearInterval(intervalId);
  }
}