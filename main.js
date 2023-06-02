const contenedor = document.querySelector(".contenedor");
const loader = document.querySelector(".loader");

document.addEventListener("DOMContentLoaded", function () {
  loader.style.display = "flex";
  contenedor.style.display = "none";
});

setTimeout(function () {
  loader.style.display = "none";
  contenedor.style.display = "flex";
}, 2000);
