var navToogle = document.querySelector('.main-nav__toggle');

navToogle.classList.remove('main-nav__toggle--nojs');
navToogle.addEventListener('click', function () {
  if (navToogle.classList.contains('main-nav__toggle--closed')) {
    navToogle.classList.remove('main-nav__toggle--closed');
    navToogle.classList.add('main-nav__toggle--opened');
  } else {
    navToogle.classList.add('main-nav__toggle--closed');
    navToogle.classList.remove('main-nav__toggle--opened');
  }

});
