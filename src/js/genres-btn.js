import { dataGenres } from './test';

const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.items');

dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
function btnGenres() {
  const liArr = dataGenres.genres
    .map(
      (element, index) =>
        `<a href="#" style ="--i:${index + 1}">
           <span></span>${element.name}
         </a>`
    )
    .join('');
  //     const newLi = document.createElement('a');
  //     newLi.classList.add(`dropdown-li-${index + 1}`);
  //     newLi.textContent = element.name;
  items.insertAdjacentHTML('beforeend', liArr);
  //     return newLi;
  //   });
  //   items.append(...liArr);
}

btnGenres();
