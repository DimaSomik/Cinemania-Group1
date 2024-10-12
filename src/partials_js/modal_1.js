// Function to open details modal
function openDetailsModal(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f52c3ffdf66aaeb5254a201d7e7eb83b&language=en-US`)
    .then(response => response.json())
    .then(data => {
      // Populate modal with data
      document.querySelector('.modal-movie-title').innerText = data.title;
      document.querySelector('.modal-movie-rating').innerText = data.vote_average;
      document.querySelector('.modal-movie-details p:nth-of-type(3)').innerText = data.popularity;
      document.querySelector('.modal-movie-details p:nth-of-type(4)').innerText = data.genres.map(genre => genre.name).join(' ');
      document.querySelector('.modal-movie-details p:nth-of-type(6)').innerText = data.overview;
      document.getElementById('detailsModal').style.display = 'flex'; // Open modal
    });
}

// Function to close details modal
function closeDetailsModal() {
  document.getElementById('detailsModal').style.display = 'none';
}
