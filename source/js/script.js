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

