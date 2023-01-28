export const modalWindow = document.querySelector('.modal-film-info');

export default function createMarkupModalWindow(data, filmGenres) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = data;

  const markup = `<div class="poster-block">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}" />
           <button type="button" data-modal-id=${id}  class="youtube__btn js__youtube__btn"><i class="fa fa-youtube-play"></i></button>
      </div>
      <div class="film-information">
        <h2 class="film-information-title">${title}</h2>
        <table class="rating-table">
          <tr>
            <td class="table-subtitle">Vote / Votes</td>
            <td class="table-inf"><span class="rating">${vote_average.toFixed(
              1
            )}</span> / ${vote_count}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Popularity</td>
            <td class="table-inf">${popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Original Title</td>
            <td class="table-inf">${original_title}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Genre</td>
            <td class="table-inf">${filmGenres}</td>
          </tr>
        </table>
        <p class="about">About</p>
        <p class="about-film">
          ${overview}
        </p>
        <div class="buttons-add">
          <button type="button" class="btn-add">add to Watched</button>
          <button type="button" class="btn-add">add to queue</button>
        </div>
      </div>`;

  modalWindow.innerHTML = markup;
}
