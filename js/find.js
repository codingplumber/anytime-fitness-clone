angular.module('app')
.controller('findCtrl', function($scope, mainSrvc, $http) {

  // var lat,
  //     lng;

  ///////////////////////////Maps////////////////////////////////////////////
  $scope.initMap = (lat, lng) => {
    var options = {};

    // Map options
    if (!lat && !lng) {
      options = {
        zoom: 5,
        center: { lat: 39.50, lng: -98.35 }
      }
    } else {
      options = {
        zoom: 9,
        center: { lat: lat, lng: lng }
      }
    }

    // New map
    $scope.map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    // $scope.marker = new google.maps.Marker({
    //   position: {lat: 42.4668, lng: -70.9495},
    //   map: map
    // });
  }
  //
  $scope.initMap(lat, lng);
  //////////////////////Geocoding///////////////////////////////////////////

  // Turn address or zip into geolocation
  $scope.getGeo = (location) => {
    mainSrvc
      .getGeo(location)
      .then(response => {
        lat = response.lat;
        lng = response.lng;
        console.log(lat, lng);

        $scope.initMap(lat, lng);
      })


    $scope.location = '';
  }

  /////////////////////Places//////////////////////////////////////////////

  // $scope.getPlaces = () => {
  //   mainSrvc
  //     .getPlaces()
  //     .then(response => {
  //       console.log('ctrl', response);
  //     })
  // }

  //////////// practice hitting api ///////////////////////////
  $scope.getPlaces = () => {
    return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew')
    .then(response => {
      console.log('srvc', response)
    })
    .catch(error => {
      console.log('places error:', error);
    })
  };

  $scope.getPlaces();

  /////////////////////////////////////////////////////////////////////////

  //
  // var mapOptions = {
  //   zoom: 4,
  //   center: new google.maps.LatLng(25,80),
  //   mapTypeId: google.maps.MapTypeId.TERRAIN
  // }
  //
  // $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //
  // $scope.markers = [];
  //
  // var infoWindow = new google.maps.InfoWindow();
  //
  // var createMarker = function(info) {
  //
  //   var marker = new google.maps.Marker({
  //     map: $scope.map,
  //     position: new google.maps.LatLng(info.lat, info.long),
  //     title: info.city
  //   });
  //   marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
  //
  //   google.maps.event.addListener(marker, 'click', function(){
  //   infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
  //   infoWindow.open($scope.map, marker);
  //   });
  //
  //   $scope.markers.push(marker);
  // }
  //
  // // for (var i = 0; i < cities.length; i++){
  // //   createMarker(cities[i]);
  // // }
  //
  // $scope.openInfoWindow = function(e, selectedMarker){
  //   e.preventDefault();
  //   google.maps.event.trigger(selectedMarker, 'click');
  // }

})