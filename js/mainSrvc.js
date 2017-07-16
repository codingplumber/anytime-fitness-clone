angular.module('app')
.service('mainSrvc', function($http) {

  // const baseURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAGhSp6JMWAFvrvAA_8vXh3HR11TBus5Y&callback=initMap'
  //
  // function initMap() {
  //   var options = {
  //     zoom: 13,
  //     center: { lat: 42.3601, lng: -71.0589 }
  //   }
  // }
  //
  // // var map = new google.maps.Map(document.getElementById('map'), options);
  //
  // this.getMap = () => {
  //   var map = new google.maps.Map(document.getElementById('map'), options);
  //   return $http({
  //     method: 'GET',
  //     url: baseURL
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     return response.data;
  //   })
  // }
  /////////////////////////////////////////

  this.day =[
         {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": [
                 {
                     "visibility": "simplified"
                 }
             ]
         },
         {
             "featureType": "road.arterial",
             "stylers": [
                 {
                     "hue": 149
                 },
                 {
                     "saturation": -78
                 },
                 {
                     "lightness": 0
                 }
             ]
         },
         {
             "featureType": "road.highway",
             "stylers": [
                 {
                     "hue": -31
                 },
                 {
                     "saturation": -40
                 },
                 {
                     "lightness": 2.8
                 }
             ]
         },
         {
             "featureType": "poi",
             "elementType": "label",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "landscape",
             "stylers": [
                 {
                     "hue": 163
                 },
                 {
                     "saturation": -26
                 },
                 {
                     "lightness": -1.1
                 }
             ]
         },
         {
             "featureType": "transit",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "water",
             "stylers": [
                 {
                     "hue": 3
                 },
                 {
                     "saturation": -24.24
                 },
                 {
                     "lightness": -38.57
                 }
             ]
         }
     ]
   this.night = [
                         {
                             "featureType": "all",
                             "elementType": "geometry",
                             "stylers": [
                                 {
                                     "lightness": "-0"
                                 },
                                 {
                                     "gamma": "0.00"
                                 },
                                 {
                                     "color": "#141b24"
                                 }
                             ]
                         },
                         {
                             "featureType": "all",
                             "elementType": "labels.text.fill",
                             "stylers": [
                                 {
                                     "color": "#ffffff"
                                 }
                             ]
                         },
                         {
                             "featureType": "all",
                             "elementType": "labels.text.stroke",
                             "stylers": [
                                 {
                                     "color": "#000000"
                                 },
                                 {
                                     "lightness": 13
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative",
                             "elementType": "geometry.fill",
                             "stylers": [
                                 {
                                     "color": "#000000"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative",
                             "elementType": "geometry.stroke",
                             "stylers": [
                                 {
                                     "color": "#144b53"
                                 },
                                 {
                                     "lightness": 14
                                 },
                                 {
                                     "weight": 1.4
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.province",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.locality",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "lightness": "-19"
                                 },
                                 {
                                     "weight": "0.39"
                                 },
                                 {
                                     "gamma": "0.62"
                                 },
                                 {
                                     "saturation": "-23"
                                 },
                                 {
                                     "color": "#647087"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.locality",
                             "elementType": "labels.text.fill",
                             "stylers": [
                                 {
                                     "color": "#5f8091"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.locality",
                             "elementType": "labels.text.stroke",
                             "stylers": [
                                 {
                                     "weight": "2.50"
                                 },
                                 {
                                     "color": "#151618"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.neighborhood",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "visibility": "on"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.neighborhood",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "administrative.neighborhood",
                             "elementType": "labels.text.fill",
                             "stylers": [
                                 {
                                     "weight": "1"
                                 },
                                 {
                                     "lightness": "0"
                                 },
                                 {
                                     "gamma": "1"
                                 },
                                 {
                                     "saturation": "0"
                                 }
                             ]
                         },
                         {
                             "featureType": "landscape",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "color": "#283c49"
                                 },
                                 {
                                     "lightness": "-3"
                                 }
                             ]
                         },
                         {
                             "featureType": "landscape.natural",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "landscape.natural.terrain",
                             "elementType": "geometry",
                             "stylers": [
                                 {
                                     "gamma": "1"
                                 }
                             ]
                         },
                         {
                             "featureType": "poi",
                             "elementType": "geometry.fill",
                             "stylers": [
                                 {
                                     "color": "#202c3b"
                                 }
                             ]
                         },
                         {
                             "featureType": "poi",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "poi",
                             "elementType": "labels.icon",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "poi.park",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "visibility": "on"
                                 },
                                 {
                                     "gamma": "1.00"
                                 },
                                 {
                                     "color": "#314a30"
                                 },
                                 {
                                     "saturation": "0"
                                 }
                             ]
                         },
                         {
                             "featureType": "poi.park",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "road",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "visibility": "off"
                                 }
                             ]
                         },
                         {
                             "featureType": "road",
                             "elementType": "labels.text",
                             "stylers": [
                                 {
                                     "visibility": "simplified"
                                 },
                                 {
                                     "lightness": "-12"
                                 }
                             ]
                         },
                         {
                             "featureType": "road",
                             "elementType": "labels.text.fill",
                             "stylers": [
                                 {
                                     "lightness": "-10"
                                 },
                                 {
                                     "weight": "0.70"
                                 }
                             ]
                         },
                         {
                             "featureType": "road",
                             "elementType": "labels.text.stroke",
                             "stylers": [
                                 {
                                     "weight": "0.71"
                                 }
                             ]
                         },
                         {
                             "featureType": "road.highway",
                             "elementType": "geometry.fill",
                             "stylers": [
                                 {
                                     "visibility": "on"
                                 },
                                 {
                                     "color": "#85744c"
                                 }
                             ]
                         },
                         {
                             "featureType": "road.arterial",
                             "elementType": "geometry.stroke",
                             "stylers": [
                                 {
                                     "lightness": 16
                                 }
                             ]
                         },
                         {
                             "featureType": "road.local",
                             "elementType": "geometry",
                             "stylers": [
                                 {
                                     "weight": "1.00"
                                 },
                                 {
                                     "lightness": "0"
                                 },
                                 {
                                     "gamma": "1.00"
                                 },
                                 {
                                     "color": "#1c1d1e"
                                 }
                             ]
                         },
                         {
                             "featureType": "transit",
                             "elementType": "labels.text.fill",
                             "stylers": [
                                 {
                                     "color": "#488faa"
                                 }
                             ]
                         },
                         {
                             "featureType": "transit",
                             "elementType": "labels.icon",
                             "stylers": [
                                 {
                                     "weight": "0.85"
                                 },
                                 {
                                     "lightness": "-21"
                                 },
                                 {
                                     "saturation": "-9"
                                 }
                             ]
                         },
                         {
                             "featureType": "transit.station",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "visibility": "on"
                                 }
                             ]
                         },
                         {
                             "featureType": "water",
                             "elementType": "all",
                             "stylers": [
                                 {
                                     "color": "#305179"
                                 }
                             ]
                         },
                         {
                             "featureType": "water",
                             "elementType": "labels",
                             "stylers": [
                                 {
                                     "invert_lightness": true
                                 },
                                 {
                                     "weight": "0.01"
                                 },
                                 {
                                     "color": "#4992a1"
                                 }
                             ]
                         }
                     ]

})
