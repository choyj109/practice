const headerBar = document.querySelector(".header-bar");
const downBtn = document.querySelector(".downBtn");
const riderImg = document.querySelector(".riderImg");
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 0,
  mousewheel: {
    forceToAxis: false,
  },
  speed: 700,
  on: {
    activeIndexChange: function () {
      if (this.realIndex == 0) {
        downBtn.classList.add("hidden");
        headerBar.classList.remove("hidden");
        riderImg.classList.remove("hidden");
      } else if (this.realIndex == 1) {
        downBtn.classList.remove("hidden");
        headerBar.classList.remove("hidden");
        riderImg.classList.add("hidden");
      } else {
        headerBar.classList.add("hidden");
      }
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  spaceBetween: 0,
  speed: 700,
  mousewheel: {
    forceToAxis: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  nested: true,
});
