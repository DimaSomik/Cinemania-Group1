var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("ll9qB"),l=(r=o("ll9qB"),o("2qbMk"));let i=[];(async()=>{const e=await(0,r.getGenres)();i=e;const t=await(0,r.getUpcomingMovies)();var n;!function(e){document.getElementById("movieTitle").textContent=e.title,document.getElementById("releaseDate").textContent=e.release_date.replaceAll("-",".");let t=Number(e.vote_average).toFixed(1);document.getElementById("movieVote").textContent=t,document.getElementById("movieVotes").textContent=e.vote_count;let n=Number(e.popularity).toFixed(1);document.getElementById("moviePopularity").textContent=n;const o=(0,l.getGenreNames)(e.genre_ids);document.getElementById("movieGenre").textContent=o,document.getElementById("movieOverview").textContent=e.overview;const r=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"../images/placeholder.jpg";document.getElementById("movieImg").src=r}((n=t.results)[Math.floor(Math.random()*n.length)])})();const d=document.getElementById("libraryButton");d.addEventListener("click",(function(){"Add to my library"===d.textContent.trim()?d.textContent="Remove from my library":d.textContent="Add to my library"}));
//# sourceMappingURL=index.8aae28a4.js.map
