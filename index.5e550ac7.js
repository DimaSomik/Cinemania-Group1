var e,t,n,i;t={},n={},null==(i=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6)&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),(0,i.register)("dxW8t",function(e,t){Object.defineProperty(e.exports,"getGenreNames",{get:function(){return c},set:void 0,enumerable:!0,configurable:!0});var n=i("fpMk3");let r=1,o=0,l=[],a=[],d=document.getElementById("movies");async function s(e=1){a=await (0,n.getGenres)();let t=await (0,n.getPopularMoviesWeek)(e);l=l.concat(t.results),function(){let e=window.innerWidth<768?1:3;for(let t=0;t<e;t++)if(o<l.length){let e=l[o],t=c(e.genre_ids),n=document.createElement("div");n.classList.add("movie-card"),n.innerHTML=`
        <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
        <div class="movie-info">
          <h2 class="movie-title">${e.title}</h2> 
          <p>${t} | ${e.release_date.split("-")[0]}</p>
          <div class="stars">${function(e){let t=Math.floor(e/2),n="";for(let e=0;e<5;e++)e<t?n+="&#9733;":n+="&#9734;";return n}(e.vote_average)}</div>
        </div>
      `,d.appendChild(n),o++}else{s(++r);break}}()}function c(e){return e.map(e=>{let t=a.find(t=>t.id===e);return t?t.name:"Nieznany gatunek"}).slice(0,2).join(", ")}document.getElementById("load-more").addEventListener("click",()=>{s(++r)}),s(r)}),i("dxW8t");
//# sourceMappingURL=index.5e550ac7.js.map
