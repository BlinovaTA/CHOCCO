; (function () {
  let myMap;
  const init = () => {
    myMap = new ymaps.Map("map", {
      center: [55.752761, 37.593950],
      zoom: 14,
      controls: [],
    });

    let coords = [
      [55.758657, 37.582835],
      [55.743057, 37.581770],
      [55.750232, 37.603689],
      [55.754585, 37.625343],
    ],
      myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/icons/marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
      });

    for (let i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
  };

  ymaps.ready(init);
})()