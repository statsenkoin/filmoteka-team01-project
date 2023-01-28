import { updateLocalStorage, LocalStorage, KEYS } from './local-storage';
import { popularFilmsbyDay, popularFilmsbyWeek } from './toggle';

const addToWatchedBtn = document.querySelector('.btn-add'); //js-add-to-watched
// const addToQueueBtn = document.querySelector(); //js-add-to-queue

addToWatchedBtn.addEventListener('click', onAddToWatchedBtn);

function onAddToWatchedBtn(event) {
  console.dir(event.target);
  const element = event.target;
  const parent = element.closest('.film-information');
  const title = parent.children[0].textContent;
  const responseStorage = popularFilmsbyWeek.getLocalStorage();
  console.log(responseStorage);
}
