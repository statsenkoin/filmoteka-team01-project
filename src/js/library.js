import { popularFilmsbyDay, popularFilmsbyWeek, watchedFilms, queueFilms } from './local-storage';
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
// 9) Потім проводимо пошук через arr.fiter(умова - співпадання id), де  arr - це масив популярних фільмів(за станом чекбокса)
//10) Знаходимо об'єкт фільма і викликаємо метод updateLocalStorage(об'єкт фільма отриманий з фільтра)
//11) Дістаємо з стореджа Watched або Queue масив(тут залежить від таргета кнопки) - getLocalStorage
//12) викликаємо функцію, яка має малювати галерею бібліотеки(передаємо в неї масив з п.11 та селектор галереї )
//13) Потім міняєм вигляд кнопки

const overlay = document.querySelector('.js-filmInfoModal');
const checkBox = document.querySelector('#input-toggle');
overlay.addEventListener('click', onWathedBtn);
let filmCollection = null;

function onWathedBtn(event) {
  const element = event.target;
  if (element.localName !== 'button') {
    return;
  }

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
      watchedFilms.addFilmtoStorage(currentFilm);
    } else if (element.classList.contains('js-add-to-queue')) {
      queueFilms.addFilmtoStorage(currentFilm);
    }
  }
}
