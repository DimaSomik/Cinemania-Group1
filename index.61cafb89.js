!function(){let e=document.querySelector(".header-menu-btn"),t=document.querySelector(".header-menu");function c(n){t.contains(n.target)||n.target===e||(t.classList.remove("active"),document.body.classList.remove("lock"),document.removeEventListener("click",c))}e.addEventListener("click",function(e){t.classList.toggle("active"),document.body.classList.toggle("lock"),t.classList.contains("active")?document.addEventListener("click",c):document.removeEventListener("click",c)}),document.querySelectorAll(".header-list a").forEach(e=>{e.href===window.location.href&&e.classList.add("active")})}();
//# sourceMappingURL=index.61cafb89.js.map
