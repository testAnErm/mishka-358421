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

var modalPopup = document.querySelector('.modal');
var modalOverlay = document.querySelector('.overlay');
var addPopup = document.querySelector('.product__order');
var addClose = document.querySelector('.modal__submit');
var addcartsLink = document.querySelectorAll(".catalog__button");

if (addPopup) {
  addPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('modal--closed');
    modalOverlay.classList.add('overlay--show');
    modalPopup.classList.add('modal--show');

  });
}

if (addClose) {
  addClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modalPopup.classList.contains('modal--show')) {
      modalPopup.classList.remove('modal--show');
      modalPopup.classList.add('modal--closed');
      modalOverlay.classList.remove('overlay--show');
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalPopup.classList.contains('modal--show')) {
      modalPopup.classList.remove('modal--show');
      modalPopup.classList.add('modal--closed');
      modalOverlay.classList.remove('overlay--show');
    }
  }
});


if (modalOverlay) {
  modalOverlay.addEventListener('click', function (evt) {
    if (evt.click != '.modal') {
      evt.preventDefault();
      if (modalPopup.classList.contains('modal--show')) {
        modalPopup.classList.remove('modal--show');
        modalPopup.classList.add('modal--closed');
        modalOverlay.classList.remove('overlay--show');
      }
    }
  });
}

if (addcartsLink) {
  for (var i = 0; i < addcartsLink.length; i++) {
    addcartsLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalPopup.classList.remove('modal--closed');
      modalPopup.classList.add("modal--show");
      modalOverlay.classList.add("overlay--show");
    });
  }
}

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938907, 30.323083],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Мишка – милые штуки ручной работы для дома',
      balloonContent: '\n' +
        'г. Санкт-Петербург,\n' +
        'ул. Большая\n' +
        'Конюшенная,\n' +
        'д. 19/8, офис 101'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-23, -83]
    });
  myMap.geoObjects
    .add(myPlacemark)
});
