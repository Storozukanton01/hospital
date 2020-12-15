"use strict";

// Target elements 
var accordions = document.querySelectorAll('.footer__accordion_button');
var contents = document.querySelectorAll('.footer__accordion_content');
var arrows = document.querySelectorAll('.footer__accordion_arrow'); // Show clicked content and hide others

active = function active(item, index) {
  contents.forEach(function (content, i) {
    if (i !== index) {
      content.style.height = 0; // Add 'active' class to clicked element

      removeClass(accordions[i], contents[i], 'active');
    } // Remove 'active' class everywhery except of the one that was clicked
    else addClass(accordions[i], contents[i], 'active');
  });
  item.style.height = "".concat(item.scrollHeight, "px"); //Spin arrows

  arrows.forEach(function (arrow, i) {
    arrow.style.transform = 'rotate(180deg)';
    if (i !== index) arrow.style.transform = 'rotate(0deg)';
  });
}; // Add function to all accordion element buttons


accordions.forEach(function (accordion, i) {
  return accordion.addEventListener("click", function () {
    return active(contents[i], i);
  });
});

var addClass = function addClass(el1, el2, className) {
  el1.classList.add(className);
  el2.classList.add(className);
};

var removeClass = function removeClass(el1, el2, className) {
  el1.classList.remove(className);
  el2.classList.remove(className);
};

var burger = $('.header__burger');
var menu = $('.menu__desktop');
var closeMenu = $('.close_menu');
var menu2 = $('.menu__phone');
var page = $('body');
burger.click(function () {
  menu.addClass('active');
  menu2.addClass('active');
  page.addClass('noScroll');
});
closeMenu.click(function () {
  menu.removeClass('active');
  menu2.removeClass('active');
  page.removeClass('noScroll');
});
var accordion_menu = $('.menu_accordion');
var content_accordionMenu = $('.menu_accordion-content');
var arrow_accordionMenu = $('.menu_arrow');
accordion_menu.click(function () {
  content_accordionMenu.toggleClass('active');
  arrow_accordionMenu.toggleClass('active');
});