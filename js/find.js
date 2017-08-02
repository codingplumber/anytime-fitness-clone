angular.module('app')
.controller('findCtrl', function($scope, mainSrvc, $http) {

  var lat,
      lng,
      map,
      infoWindow;

  ////////////////////////// MAPS ///////////////////////////////////////////
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

  /////////////////// Get User's Location //////////////////////////////////

  $scope.myLoc = () => {
    map = new google.maps.Map(document.getElementById('map'), {
      // center: { lat: 39.50, lng: -98.35 },
      zoom: 13
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  ///////////////////// GEOCODING //////////////////////////////////////////

  // Turn address or zip into geolocation
  $scope.getGeo = (location) => {
    mainSrvc
      .getGeo(location)
      .then(response => {
        lat = response.lat;
        lng = response.lng;

        $scope.initMap(lat, lng);
      })


    $scope.location = '';
  }


})
