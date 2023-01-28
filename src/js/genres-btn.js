import { dataGenres } from './test';
import { fetchMoivesByGenre } from './api-service';

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');

dropdown.addEventListener('click', onButtonClick);
function btnGenres() {
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

items.addEventListener('click', onGanreClick);
btnGenres();

function onButtonClick(evt) {
  evt.preventDefault();
  dropdown.classList.toggle('active');
}

async function onGanreClick(evt) {
  evt.preventDefault();

  console.log(await fetchMoivesByGenre(evt.target.id));
}
