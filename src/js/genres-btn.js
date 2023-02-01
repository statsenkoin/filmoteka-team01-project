import { genresFilm } from './local-storage';

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');

dropdown.addEventListener('click', onButtonClick);

btnGenres();
export { items };

function btnGenres() {
  const dataGenres = genresFilm.getLocalStorage();
  dataGenres.unshift({ id: 'all', name: 'ALL' });
  const liArr = dataGenres
    .map(
      (element, index) =>
        `<a href="#" style="--i:${index + 1}" id="${element.id}">
           <span></span>${element.name}
         </a>`
    )
    .join('');
  items.insertAdjacentHTML('beforeend', liArr);
}

function onButtonClick(evt) {
  evt.preventDefault();
  dropdown.classList.toggle('active');
}
