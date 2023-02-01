import { dataGenres } from './test';
// import { fetchMoivesByGenre } from './api-service';
// import { markupTrending } from './markups';

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');
// const homeGallery = document.querySelector('.home-gallery');

// =====================================
export { items };
// =====================================
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

// items.addEventListener('click', onGanreClick);
btnGenres();

function onButtonClick(evt) {
  evt.preventDefault();
  dropdown.classList.toggle('active');
}

// async function onGanreClick(evt) {
//   evt.preventDefault();

//   const arrMovies = await fetchMoivesByGenre(evt.target.id, 1);
//   markupTrending(arrMovies.results, homeGallery);
// }
