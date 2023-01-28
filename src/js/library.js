import { updateLocalStorage, LocalStorage, KEYS } from './local-storage';
import { popularFilmsbyDay, popularFilmsbyWeek } from './toggle';
//Реаліція додавання в бібліотеку з картки-модалки

// 1) імпортувати класи з популярними з toggle
// 2) створити нові екземпляри класу Watched та Queue
// 3) вибрати елементи кнопок
// 4) вибрати чекбокс
// 5) додати слухача на кнопки або на div з кнопками
// 6) прописати обробник - має перевіряти currentTarget, потім перевіряти стан чекбокса.
// 7) Якщо він checked, тоді загружати з сторедж популярні за день, в іншому випадку - за тиждень.
// 8) Потім обробник має шукати ключ до фільму на картці - властивість element.closest('селектор батька').Потім якимось чином беремо звідти id - запитати по реалізацію у Ігора, бо зараз id на картці не має!!!!!!
// 9) Потім проводимо пошук через arr.fiter(умова - співпадання id), де  arr - це масив популярних фільмів(за станом чекбокса)
//10) Знаходимо об'єкт фільма і викликаємо метод updateLocalStorage(об'єкт фільма отриманий з фільтра)
//11) Дістаємо з стореджа Watched або Queue масив(тут залежить від таргета кнопки) - getLocalStorage
//12) викликаємо функцію, яка має малювати галерею бібліотеки(передаємо в неї масив з п.11 та селектор галереї )
//13) Потім міняєм вигляд кнопки

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
