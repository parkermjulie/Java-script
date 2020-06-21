// tried to use Google Map API and realised it ain't free


mapboxgl.accessToken = 'pk.eyJ1IjoicGFya2VybWp1bGllIiwiYSI6ImNrYjd0aXE4dDA5NGcydXBnazdqOGs5OTQifQ.H02_dzUtAZImvXZtajm7AA';


var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-80.6596442, 28.3286305]
    },
    properties: {
      title: 'Cocoa',
      description: 'Because of that pretty pier ! '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-80.8663461, 28.8674035]
    },
    properties: {
      title: 'Oak Hill',
      description: 'a cool place to relax after a long journey'
    }    
        
  },
{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-80.6564604, 28.573334]
    },
    properties: {
      title: 'JFK Space Station',
      description: 'land where it all began'
    }
}
		]
};




var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/parkermjulie/ckbp1e8hj0rmp1it920vhgm6p',
  center: [-80.7890565, 28.5728722],
  zoom: 9,
});



// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

 // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                '<h3>' +
                  marker.properties.title +
                  '</h3><p>' +
                  marker.properties.description +
                  '</p>'
              )
          )
          .addTo(map);
});
