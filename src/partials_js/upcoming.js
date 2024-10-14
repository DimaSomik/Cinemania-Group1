const API_KEY = 'cc77d73a1f36cdb91d7e6b21f538344a';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';


async function getUpcomingMovies(page = 1) {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}


function displayMovie(movie) {
    document.getElementById('movieTitle').textContent = movie.title;
    
  document.getElementById('releaseDate').textContent = movie.release_date;

  document.getElementById('movieVote').textContent = movie.vote_average;
  document.getElementById('movieVotes').textContent = movie.vote_count;

  document.getElementById('moviePopularity').textContent = movie.popularity;

  
  const genreList = movie.genre_ids; 
  document.getElementById('movieGenre').textContent = genreList.length > 0 ? genreList[0] : 'Unknown';

  
  document.getElementById('movieOverview').textContent = movie.overview;

  
  const posterPath = movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : '../images/placeholder.jpg';
  document.getElementById('movieImg').src = posterPath;
}


function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}


getUpcomingMovies().then(data => {
  const randomMovie = getRandomMovie(data.results); 
  displayMovie(randomMovie); 
});


const libraryButton = document.getElementById('libraryButton');

libraryButton.addEventListener('click', function () {
  if (libraryButton.textContent.trim() === 'Add to my library') {
    libraryButton.textContent = 'Remove from my library';
  } else {
    libraryButton.textContent = 'Add to my library';
  }
});