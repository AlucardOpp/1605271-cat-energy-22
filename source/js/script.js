const mainNavToggle = document.querySelector(".main-nav__toggle")
let mainNav = document.querySelector(".main-nav");
let pageHeader = document.querySelector(".page-header");
let beforeButton = document.querySelector(".example__it");
let afterButton = document.querySelector(".example__became");
let beforeImage = document.querySelector(".example__image--fat");
let afterImage = document.querySelector(".example__image--slim");
let rangeBar = document.querySelector(".range-controls__bar");
let exampleItBecame = document.querySelector(".example__it-became");
let exampleCosts = document.querySelector(".example__costs");
let rangeToggle = document.querySelector(".range-controls__toggle");

mainNav.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--nojs");

mainNavToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--opened");
  mainNav.classList.toggle("main-nav--closed");
  pageHeader.classList.toggle("page-header--opened");
  pageHeader.classList.toggle("page-header--closed");
});

beforeButton.addEventListener("click", function() {
  beforeImage.classList.add("example__image--show");
  beforeImage.classList.remove("example__image--hide");
  afterImage.classList.add("example__image--hide");
  beforeImage.classList.remove("example__image--show");
  rangeBar.classList.add("range-controls__bar--it");
  rangeBar.classList.remove("range-controls__bar--became");
  exampleCosts.classList.remove("example__costs--became");
  exampleItBecame.classList.add("example__it-became--it");
  exampleItBecame.classList.remove("example__it-became--became");
  rangeToggle.classList.add("range-controls__toggle--it");
  rangeToggle.classList.remove("range-controls__toggle--became");
});

afterButton.addEventListener("click", function() {
  beforeImage.classList.add("example__image--hide");
  beforeImage.classList.remove("example__image--show");
  afterImage.classList.add("example__image--show");
  afterImage.classList.remove("example__image--hide");
  rangeBar.classList.remove("range-controls__bar--it");
  rangeBar.classList.add("range-controls__bar--became");
  exampleCosts.classList.add("example__costs--became");
  exampleItBecame.classList.remove("example__it-became--it");
  exampleItBecame.classList.add("example__it-became--became");
  rangeToggle.classList.remove("range-controls__toggle--it");
  rangeToggle.classList.add("range-controls__toggle--became");
});
