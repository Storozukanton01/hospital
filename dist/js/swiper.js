"use strict";

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  centeredSlides: true,
  on: {
    init: function init() {
      var _this = this;

      this.el.addEventListener('mouseenter', function () {
        _this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', function () {
        _this.autoplay.start();
      });
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    600: {
      spaceBetween: 15,
      slidesPerView: 3
    },
    1024: {
      spaceBetween: 0,
      slidesPerView: 5.5,
      centeredSlides: false
    }
  },
  grabCursor: true
});