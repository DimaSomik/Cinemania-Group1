!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("bpxeT"),i=r("2TvXO"),d=r("fpMk3"),l=(d=r("fpMk3"),r("dxW8t"));function m(e){document.getElementById("movieTitle").textContent=e.title,document.getElementById("releaseDate").textContent=e.release_date.replaceAll("-",".");var t=Number(e.vote_average).toFixed(1);document.getElementById("movieVote").textContent=t,document.getElementById("movieVotes").textContent=e.vote_count;var n=Number(e.popularity).toFixed(1);document.getElementById("moviePopularity").textContent=n;var o=(0,l.getGenreNames)(e.genre_ids);document.getElementById("movieGenre").textContent=o,document.getElementById("movieOverview").textContent=e.overview;var r=e.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path):"../images/placeholder.jpg";document.getElementById("movieImg").src=r}e(a)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.getGenres)();case 2:return n=e.sent,n,e.next=6,(0,d.getUpcomingMovies)(page=1);case 6:o=e.sent,t=o.results,m(t[Math.floor(Math.random()*t.length)]);case 9:case"end":return e.stop()}var t}),t)})))();var u=document.getElementById("libraryButton");u.addEventListener("click",(function(){"Add to my library"===u.textContent.trim()?u.textContent="Remove from my library":u.textContent="Add to my library"}))}();
//# sourceMappingURL=index.b9bd13bd.js.map
