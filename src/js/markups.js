export default function createMarkup(arrMovies) {
    return markup =  arrMovies.map((
        { name,
        first_air_date,
        poster_path }) =>
    `<li class="movies-images__item">
            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Movie ${name}" />
        <div class="box-description">
            <h2 class="box-description__title">${name}</h2>
            <p class="box-description__text">
                <span class="box-description__span">!!!!!!!!!!!!!!!!!!</span>${date.getFullYear(first_air_date)}
            </p>
        </div>
    </li>`).join('');
}