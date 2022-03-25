// geocoder for zip code to location conversations
let geocoder;
// Service to query community gardens
let service;
// The map to display them all
let map;
// Infowindow
let infowindow;
// Coords to center the map initially
const coords = { lat: 47.6142, lng: -122.1937 };

// Google maps
const initMap = function () {
  map = new google.maps.Map(document.getElementById('localgardenmap'), {
    center: coords,
    zoom: 11
  });

  geocoder = new google.maps.Geocoder();

  infowindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);
};
