import { dataGenres } from './test';

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');

export { items };

dropdown.addEventListener('click', onButtonClick);
function btnGenres() {
  dataGenres.genres.unshift({ id: 'all', name: 'ALL' });
  const liArr = dataGenres.genres
    .map(
      (element, index) =>
        `<a href="#" style="--i:${index + 1}" id="${element.id}">
           <span></span>${element.name}
         </a>`
    )
    .join('');

  items.insertAdjacentHTML('beforeend', liArr);
}

btnGenres();

function onButtonClick(evt) {
  evt.preventDefault();
  dropdown.classList.toggle('active');
}
