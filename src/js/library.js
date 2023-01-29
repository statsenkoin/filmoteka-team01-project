import { watchedFilms, queueFilms } from './local-storage';
import { popularFilms } from './filmoteka';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//options for notiflix
const options = {
  width: '500px',
  borderRadius: '30px',
  position: 'center-bottom',
  distance: '25px',
  fontSize: '30px',
  timeout: 2000,
};

const overlay = document.querySelector('.js-filmInfoModal');

overlay.addEventListener('click', onWathedBtn);
let filmCollection = null;

function onWathedBtn(event) {
  const element = event.target;

  if (
    element.classList.contains('js-add-to-watched') ||
    element.classList.contains('js-add-to-queue')
  ) {
    filmCollection = popularFilms.getLocalStorage();

    const idFilm = overlay.lastElementChild.lastElementChild.id;

    const currentFilm = filmCollection.filter(film => film.id == idFilm);

    if (element.classList.contains('js-add-to-watched')) {
      if (!watchedFilms.getLocalStorage()) {
        watchedFilms.setLocalStorage();
      }
      const response = watchedFilms.getLocalStorage();
      const filmIncludes = response.filter(item => item.id == idFilm);

      if (filmIncludes.length) {
        Notify.warning('The movie has already been added to my library', options);
      } else {
        watchedFilms.addFilmtoStorage(...currentFilm);
        Notify.success('The movie has been added to my library', options);
      }
    } else if (element.classList.contains('js-add-to-queue')) {
      if (!queueFilms.getLocalStorage()) {
        queueFilms.setLocalStorage();
      }
      const response = queueFilms.getLocalStorage();

      const filmIncludes = response.filter(item => item.id == idFilm);

      if (filmIncludes.length) {
        Notify.warning('The movie has already been added to my library', options);
      } else {
        queueFilms.addFilmtoStorage(...currentFilm);
        Notify.success('The movie has been added to my library', options);
      }
    }
    element.disabled = 'true';
    element.style.background = '#FF7F50';
  }
}
