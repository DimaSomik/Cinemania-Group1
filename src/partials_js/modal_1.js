const API_KEY = 'YOUR_API_KEY'; // API klucz do TMDB

// Funkcja otwierająca modal z informacjami szczegółowymi
function openDetailsModal(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('.ModalMovieTitle').innerText = data.title;
      document.querySelector('.ModalMovieRating').innerText = data.vote_average;
      document.querySelector('.ModalMovieDetails p:nth-of-type(3)').innerText = data.popularity;
      document.querySelector('.ModalMovieDetails p:nth-of-type(4)').innerText = data.genres.map(genre => genre.name).join(' ');
      document.querySelector('.ModalMovieDetails p:nth-of-type(6)').innerText = data.overview;
      document.getElementById('detailsModal').style.display = 'flex'; // Otwórz modal
    });
}

// Funkcja zamykająca modal
function closeDetailsModal() {
  document.getElementById('detailsModal').style.display = 'none';
}