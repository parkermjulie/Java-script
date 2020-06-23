// tried to use Google Map API and realised it ain't free


// MAP
//token
mapboxgl.accessToken = 'pk.eyJ1IjoicGFya2VybWp1bGllIiwiYSI6ImNrYjd0aXE4dDA5NGcydXBnazdqOGs5OTQifQ.H02_dzUtAZImvXZtajm7AA';

//map with versions and switch
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/parkermjulie/ckbrsn9776kil1imd669s89cw',
	zoom: 9,
	center: [-80.7890565, 28.5728722],
});
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
	var layerId = layer.target.id;
	map.setStyle('mapbox://styles/mapbox/' + layerId);
}
for (var i = 0; i < inputs.length; i++) {
	inputs[i].onclick = switchLayer;
}

// locations with description
var geojson = {
	type: 'FeatureCollection',
	features: [{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-80.6596442, 28.3286305]
		},
		properties: {
			name: 'Cocoa',
			description: 'Becauqse of that pretty pier ! ',
		}
	}, {
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-80.8663461, 28.8674035]
		},
		properties: {
			name: 'Oak Hill',
			description: 'a cool place to relax after a long journey',
		}
	}, {
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-80.6564604, 28.573334]
		},
		properties: {
			name: 'JFK Space Station',
			description: 'land where it all began',
		}
	}]
};

// markers on the map
geojson.features.forEach(function(marker) {
	// create a HTML element for each feature
	var el = document.createElement('div');
	el.className = 'marker';
	
// making a marker
	new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
			offset: 25
		}) // add popups
		.setHTML('<h3>' + marker.properties.name + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
});


//WEATHER
function getAPIdata() {
	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey = 'e52fca40d57084a31e403b5bd1a87496';
	var city = document.getElementById('city').value;
	
// construct request
	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
// get current weather
	fetch(request)
	
		// parse to JSON format
		.then(function(response) {
			if (!response.ok) throw Error(response.statusText);
			return response.json();
		})
		// render weather per day
		.then(function(response) {
			// render weatherCondition
			onAPISucces(response);
		})
		// catch error
		.catch(function(error) {
			onAPIError(error);
		});
}

function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;
	
	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
	
	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = '<img src=\"https://media0.giphy.com/media/3ohhwr9fxNhozYRhLy/giphy.gif?cid=ecf05e47cb42c75c15474bd745683c9a28c565d1e58d165a&rid=giphy.gif" width=\"300px\" height=\"280px\"> <br />' + response.name + '<br>' + degC + '&#176;C <br>'  + '<br>';
}

function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = ' <img src=\"https://media0.giphy.com/media/vxOUtsD8VxD4A/giphy.gif?cid=ecf05e47f40d7999bbcee5882e1222ced08f9a67d0738f5d&rid=giphy.gif" width=\"300px\" height=\"280px\"> <br />  <span style="color:#DE5D5D", "font-weight:800"> Mr.Hamster is angry with your knowledge of geography </span> ';
}

// init data stream
document.getElementById('getWeather').onclick = function() {
	getAPIdata();
};
