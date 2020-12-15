// Target elements 
const accordions = document.querySelectorAll('.footer__accordion_button');
const contents = document.querySelectorAll('.footer__accordion_content');
const arrows = document.querySelectorAll('.footer__accordion_arrow');

// Show clicked content and hide others
active = (item, index) => {
    contents.forEach((content, i) => {
        if (i !== index) {
          content.style.height = 0;
          // Add 'active' class to clicked element
          removeClass(accordions[i], contents[i], 'active');
        }
        // Remove 'active' class everywhery except of the one that was clicked
        else addClass(accordions[i], contents[i], 'active');
    });
  
    item.style.height = `${item.scrollHeight}px`; 
    //Spin arrows
    arrows.forEach((arrow, i) => {
        arrow.style.transform = 'rotate(180deg)';
        if (i !== index) arrow.style.transform = 'rotate(0deg)';
    });
}

// Add function to all accordion element buttons
accordions.forEach((accordion, i) => accordion.addEventListener("click", () => active(contents[i], i)));

let addClass = (el1, el2, className) =>  {
   el1.classList.add(className);
   el2.classList.add(className);
}

let removeClass = (el1, el2, className) => {
   el1.classList.remove(className);
   el2.classList.remove(className);
}


const burger = $('.header__burger');
const menu = $('.menu__desktop');
const closeMenu = $('.close_menu');
const menu2 = $('.menu__phone');
const page = $('body')

burger.click(function () {
    menu.addClass('active');
    menu2.addClass('active');
    page.addClass('noScroll')
});

closeMenu.click(function() {
    menu.removeClass('active');
    menu2.removeClass('active');
    page.removeClass('noScroll')
});

const accordion_menu = $('.menu_accordion');
const content_accordionMenu = $('.menu_accordion-content');
const arrow_accordionMenu = $('.menu_arrow');

accordion_menu.click(function() {
  content_accordionMenu.toggleClass('active');
  arrow_accordionMenu.toggleClass('active');
})


