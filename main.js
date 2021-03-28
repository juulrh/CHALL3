mapboxgl.accessToken = 'pk.eyJ1IjoianV1bHJoIiwiYSI6ImNrbWx0cXBkajA5Ym0ycGx3NGQxa2Q2ZTgifQ.3qb02-PYSz_d6fgTyY8p5w';

var locaties = [{
    type: 'Feature',
    properties: {
      description: '<p>Goede plek om te landen</p>',
      icon: 'flag'
    },
    geometry: {
      type: 'Point',
      coordinates: [6.533258519883534, 53.17623958958595]
    },
  },
  {
    type: 'Feature',
    properties: {
      description: '<p>Goede plek om te landen</p>',
      icon: 'flag'
    },
    geometry: {
      type: 'Point',
      coordinates: [6.5159615333312315, 53.1797266170132]
    }
  },
];

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/juulrh/ckmlxucqgfqfk17qyr6gxvnc2',
  center: [6.5425821, 53.1787103],
  zoom: 13

});
map.addControl(new mapboxgl.NavigationControl());



map.on('load', function () {

  // laad een extern bestand
 //map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function (error, image) {
//map.loadImage('https://upload.wikimedia.org/wikipedia/commons/5/54/Dialog-accept.svg', function (error, image) {
map.loadImage('images/flag.png', function (error, image){
      // voeg image toe en noem het cat
     map.addImage('flag', image);

      // defineer een punt in het geheugen
      map.addSource('point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
         features: locaties
        }
      });
      // plak de nieuwe source 'point' op de kaart in een eigen layer
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'point',
        layout: {
          'icon-image': 'flag',
         'icon-size': 0.18
        }
      });
    }
  );
});
map.on('load', function () {

  // laad een extern bestand
 //map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function (error, image) {
//map.loadImage('https://upload.wikimedia.org/wikipedia/commons/5/54/Dialog-accept.svg', function (error, image) {
map.loadImage('images/pasop.png', function (error, image){
      // voeg image toe en noem het cat
     map.addImage('pasop', image);

      // defineer een punt in het geheugen
      map.addSource('point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [6.558267009864895, 53.17932862664539]
            }
          }]
         //features: locaties
        }
      });
      // plak de nieuwe source 'point' op de kaart in een eigen layer
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'point',
        layout: {
          'icon-image': 'pasop',
         'icon-size': 0.18
        }
      });
    }
  );
});
