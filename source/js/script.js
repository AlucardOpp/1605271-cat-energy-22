const mainNavToggle = document.querySelector(".main-nav__toggle")
let mainNav = document.querySelector(".main-nav");
let pageHeader = document.querySelector(".page-header");

mainNav.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--nojs");

mainNavToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--opened");
  mainNav.classList.toggle("main-nav--closed");
  pageHeader.classList.toggle("page-header--opened");
  pageHeader.classList.toggle("page-header--closed");
});
