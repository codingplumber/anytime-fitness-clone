'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('training', {
    url: '/training',
    templateUrl: './views/training.html'
  }).state('join', {
    url: '/join',
    templateUrl: './views/join.html'
  }).state('find', {
    url: '/find',
    templateUrl: './views/find.html',
    controller: 'findCtrl'
  });
});
'use strict';

angular.module('app').controller('findCtrl', function ($scope, mainSrvc) {

  var lat, lng;

  ///////////////////////////Maps////////////////////////////////////////////
  $scope.initMap = function (lat, lng) {
    var options = {};

    // Map options
    if (!lat && !lng) {
      options = {
        zoom: 5,
        center: { lat: 39.50, lng: -98.35 }
      };
    } else {
      options = {
        zoom: 9,
        center: { lat: lat, lng: lng }
      };
    }

    // New map
    $scope.map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    // $scope.marker = new google.maps.Marker({
    //   position: {lat: 42.4668, lng: -70.9495},
    //   map: map
    // });
  };
  //
  $scope.initMap(lat, lng);
  //////////////////////Geocoding///////////////////////////////////////////

  // Turn address or zip into geolocation
  $scope.getGeo = function (location) {
    mainSrvc.getGeo(location).then(function (response) {
      lat = response.lat;
      lng = response.lng;

      $scope.initMap(lat, lng);
    });

    $scope.location = '';
  };

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
});
'use strict';

angular.module('app').directive('footer', function () {

  return {
    restrict: 'E',
    templateUrl: './views/footer.html'
  };
});
'use strict';

angular.module('app').directive('header', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html',
    link: function link(scope, elem, att) {

      $(document).ready(function () {
        $('#nav-icon3').click(function () {
          $(this).toggleClass('open');

          $('#header-slide').toggleClass('down');

          $('#header-wrapper-slide').toggleClass('down');
        });
      });
    }
  };
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrvc) {

  // $scope.test = 'ctrl working';
  // $scope.test2 = mainSrvc.test;


});
'use strict';

angular.module('app').service('mainSrvc', function ($http) {

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


  //////////////////////Geocoding///////////////////////////////////////////
  var key = 'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ';
  var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json';

  this.getGeo = function (location) {
    // console.log('mainSrvc', location);
    // var location = loc;
    return $http.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ'
      }
    }).then(function (response) {
      // Log full response
      // console.log(response);
      // Formatted geolocation
      // console.log(response.data.results[0].geometry.location);
      var res = response.data.results[0].geometry.location;
      return res;
    }).catch(function (error) {
      console.log(error);
    });
  };
});
//# sourceMappingURL=bundle.js.map
