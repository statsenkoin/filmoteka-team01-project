// import {
//   popularFilmsbyDay,
//   popularFilmsbyWeek,
//   watchedFilms,
//   queueFilms,
// } from './local-storage';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ============================================================================
//Реаліція додавання в бібліотеку з картки-модалки

// 1) імпортувати класи з популярними +++
// 2) створити нові екземпляри класу Watched та Queue +++
// 3) вибрати елементи кнопок +++
// 4) вибрати чекбокс +++
// 5) додати слухача  div ++++
// 6) прописати обробник - має перевіряти Target, потім перевіряти стан чекбокса. ++++
// 7) Якщо він checked, тоді загружати з сторедж популярні за день, в іншому випадку - за тиждень. +++
// 8) Потім обробник має шукати ключ до фільму на картці - властивість element.closest('селектор батька').Потім якимось чином беремо звідти id - запитати по реалізацію у Ігора, бо зараз id на картці не має!!!!!! ++++
// 9) Потім проводимо пошук через arr.fiter(умова - співпадання id), де  arr - це масив популярних фільмів(за станом чекбокса) ++++
//10) Знаходимо об'єкт фільма і викликаємо метод updateLocalStorage(об'єкт фільма отриманий з фільтра) ++++

//13) Потім міняєм вигляд кнопки

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
const checkBox = document.querySelector('#input-toggle');
overlay.addEventListener('click', onWathedBtn);
let filmCollection = null;

function onWathedBtn(event) {
  const element = event.target;

  if (
    element.classList.contains('js-add-to-watched') ||
    element.classList.contains('js-add-to-queue')
  ) {
    if (checkBox.checked) {
      filmCollection = popularFilmsbyDay.getLocalStorage();
      console.log('Day', filmCollection);
    } else {
      filmCollection = popularFilmsbyWeek.getLocalStorage();
      console.log('Week', filmCollection);
    }

    const idFilm = overlay.lastElementChild.lastElementChild.id;

    const currentFilm = filmCollection.filter(film => film.id == idFilm);
    console.dir(element);
    if (element.classList.contains('js-add-to-watched')) {
      const response = watchedFilms.getLocalStorage();
      if (!response) {
        watchedFilms.setLocalStorage();
      }
      const currentCollection = watchedFilms.getLocalStorage();
      const filmIncludes = currentCollection.filter(
        item => item[0].id == idFilm
      );

      if (filmIncludes.length) {
        Notify.warning(
          'The movie has already been added to my library',
          options
        );
      } else {
        watchedFilms.addFilmtoStorage(currentFilm);
        Notify.success('The movie has been added to my library', options);
      }
    } else if (element.classList.contains('js-add-to-queue')) {
      const response = queueFilms.getLocalStorage();
      if (!response) {
        queueFilms.setLocalStorage();
      }
      const currentCollection = queueFilms.getLocalStorage();
      const filmIncludes = currentCollection.filter(
        item => item[0].id == idFilm
      );

      if (filmIncludes.length) {
        Notify.warning(
          'The movie has already been added to my library',
          options
        );
      } else {
        queueFilms.addFilmtoStorage(currentFilm);
        Notify.success('The movie has been added to my library', options);
      }
    }
    element.disabled = 'true';
    element.style.background = '#FF7F50';
  }
}
