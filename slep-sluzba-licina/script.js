const btnNavOpen = document.querySelector(".mobile-menu-open");
const btnNavClose = document.querySelector(".mobile-menu-close");
const headerEl = document.querySelector(".section-header");

btnNavOpen.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
btnNavClose.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
