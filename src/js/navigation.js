$(".header__navigation li").hover(function() {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children("ul").stop().slideDown(300);
  } else {
    $(this).children("ul").stop().slideUp(300);
  }
});

if (document.documentElement.clientWidth < 1024) {
  $(window).scroll(function () {
    changeHeader();
  });
}
else {
  if (document.location.pathname !== '/') {
    $('.header').addClass('fixed');
    $('.header__1').addClass('hide')
    $('.header__2').addClass('show')
}
  else {
    $(window).scroll(function () {
      changeHeader();
    });
}
}

function changeHeader() {
  if ($(window).scrollTop() >= $('.welcome').height()) {
      $('.header').addClass('fixed');
      $('.header__1').addClass('hide')
      $('.header__2').addClass('show')
  } else {
      $('.header').removeClass('fixed');
      $('.header__1').removeClass('hide')
      $('.header__2').removeClass('show')
  }
}