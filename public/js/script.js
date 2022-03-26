// // creating Welcome modal and zipmodal variable
// const $modal = $('.modal');
// const $zipModal = $('.zipModal');
// // Array to store the community garden markers
// let markers = [];
// // creating input variable and search button variable
// const zipInput = document.querySelector('#zip');
// const searchBtn = document.querySelector('#button1');
// // will be used later to pull zip value
// let getZip;
// // variables for displaying zone results and creating appropriate link
// const zoneResults = document.querySelector('.zoneResults');
// const results = document.querySelector('.results');
// const zoneLink = document.querySelector('#zoneLink');

// getZip = localStorage.getItem('zip') || '98052';

// // Defines the request for community gardens
// const requestGardens = {
//   location: coords,
//   radius: '500', // Preferring results closer to the center point.
//   query: 'community garden',
// };

// // modal
// $modal.dialog({
//   modal: true,
//   buttons: [
//     {
//       text: 'Yes!',
//       click() {
//         $(this).dialog('close');
//       }
//     },
//     {
//       text: "No, I'll be wearing gloves.",
//       click() {
//         $(this).dialog('close');
//       }
//     }
//   ],
//   minWidth: 400,
// });

// const init = function () {
//   $zipModal.hide();
//   geocode({ address: getZip });
//   getAgZone(getZip);
// };

// const createMarker = function (place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });
//   // open a pop-up window to display address for the marker.
//   google.maps.event.addListener(marker, 'click', () => {
//     const content = document.createElement('div');
//     const nameElement = document.createElement('h2');
//     const addressElement = document.createElement('p');

//     nameElement.textContent = place.name;
//     addressElement.textContent = place.formatted_address;

//     content.appendChild(nameElement);
//     content.appendChild(addressElement);
//     infowindow.setContent(content);
//     infowindow.open(map, marker);
//   });
//   markers.push(marker);
// };

// // Function to search community gardens and create markers for them.
// const getCommunityGardens = function (requestLocation) {
//   markers = [];
//   console.log(markers);
//   console.log(requestLocation);
//   service.textSearch(requestLocation, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       console.log(results.length);
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//     }
//   });
// };

// var geocode = function (request) {
//   clear();
//   geocoder.geocode(request)
//     .then((result) => {
//       const { results } = result;

//       map.setCenter(results[0].geometry.location);

//       console.log(results[0].geometry.location.lat());
//       requestGardens.location.lat = results[0].geometry.location.lat();
//       requestGardens.location.lng = results[0].geometry.location.lng();
//       console.log(requestGardens.location.lat);
//       getCommunityGardens(requestGardens);
//     })
//     .catch((e) => {
//       alert(`Geocode was not successful for the following reason: ${e}`);
//     });
// };

// // Sets the map on all markers in the array.
// function setMapOnAll(map) {
//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }

// var clear = function () {
//   setMapOnAll(null);
//   markers = [];
// };

// // ZIPCODE INPUT
// searchBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   getZip = zipInput.value.trim();
//   if (getZip.length !== 5) {
//     // zipModal displays if zipcode entry is !5 character
//     $zipModal.dialog({
//       modal: true,
//       minWidth: 400,
//     });
//   } else {
//     console.log(getZip);
//     // stores zipcodes
//     localStorage.setItem('zip', getZip);
//     geocode({ address: getZip });
//     getAgZone(getZip);
//     // if ($zipModal.css('visibility') === 'hidden') {
//     //   $zipModal.css('visibility', 'visible');
//     // } else {
//     //   $zipModal.css('visibility', 'hidden');
//     // }
//   }
// });

// const show = function () {
//   paraP = document.getElementById('hidden');
// };

// // API to pull agricultural zone
// var getAgZone = function (getZip) {
//   // stitch the zipcode into the API URL
//   const agURL = `https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=${getZip}`;
//   console.log(agURL);
//   fetch(agURL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       zoneResults.textContent = `You live in Zone ${data.zone}!`;
//       // generate link to zone growing info
//       zoneLink.href = `https://www.gardenate.com/?zone=${data.zone}`;
//       zoneLink.target = '_blank';
//       zoneLink.innerText = 'Click here to see what you can grow in your zone!';
//     });
// };

// document.addEventListener('DOMContentLoaded', (e) => {
//   init();
// });
