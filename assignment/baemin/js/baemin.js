const headerBar = document.querySelector(".header-bar");
const downBtn = document.querySelector(".downBtn");
const riderImg = document.querySelector(".riderImg");
const bulletUl = document.querySelector(".swiper-pagination");
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  speed: 700,
  on: {
    activeIndexChange: function () {
      if (this.realIndex == 0) {
        downBtn.classList.remove("visiable");
        headerBar.classList.remove("hidden");
        riderImg.classList.remove("hidden");
        bulletUl.classList.remove("visiable");
      } else if (
        this.realIndex == 1 ||
        this.realIndex == 2 ||
        this.realIndex == 3 ||
        this.realIndex == 4 ||
        this.realIndex == 5 ||
        this.realIndex == 6
      ) {
        downBtn.classList.add("visiable");
        headerBar.classList.remove("hidden");
        riderImg.classList.add("hidden");
        bulletUl.classList.add("visiable");
      } else {
        headerBar.classList.add("hidden");
        bulletUl.classList.remove("visiable");
      }
    },
  },
});

