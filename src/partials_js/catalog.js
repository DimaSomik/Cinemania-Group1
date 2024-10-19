import { getPopularMoviesWeek } from './api';
import { getGenreNames } from './weekly_trends';
import { getGenres } from './api';
import { searchMovies } from './api';

let genres = [];

function createMovieCard(movie) {
  const releaseYear = movie.release_date
    ? movie.release_date.split('-')[0]
    : 'Unknown';

  const genreNames = getGenreNames(movie.genre_ids);

  return `
    <div class="catalog-movie-card">
        <img class="catalog-movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            <div class="catalog-img-overlay"></div>
      <div class="catalog-movie-info">
        <div>
          <span class="catalog-movie-title">${movie.title}</span>
        </div>
        <div>
          <span class="catalog-movie-value">${genreNames}</span>
          <span class="catalog-separator">|</span>
          <span class="catalog-movie-value">${releaseYear}</span>
        </div>
      </div>
    </div>
  `;
}

function createMoviesCatalog(movies) {
  const gallery = document.querySelector('.catalog-gallery');
  gallery.innerHTML = movies.map(createMovieCard).join('');
}

async function initializeCatalog(page = 1) {
  await getGenres();
  const { results } = await getPopularMoviesWeek(page);
  createMoviesCatalog(results);
}

async function handleSearch() {
  const query = document.querySelector('.catalog-search-input').value.trim();

  if (!query) return;

  const { results } = await searchMovies(query, 1);

  if (results.length > 0) {
    createMoviesCatalog(results);
  } else {
    document.querySelector(
      '.catalog-gallery'
    ).innerHTML = `<p class='catalog-no-movies-found'>
        <span>OOPS...</span>
        <span>We are very sorry!</span>
        <span>We don't have any results matching your search.</span>
      </p>`;
  }
}

function initializeSearchForm() {
  const searchForm = document.querySelector('.catalog-search-form');

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    handleSearch();
  });
}

function clearSearchButton() {
  const clearButton = document.querySelector('.catalog-icon-x');
  const searchInput = document.querySelector('.catalog-search-input');

  if (clearButton && searchInput) {
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeCatalog();
  initializeSearchForm();
  clearSearchButton();
});
