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

angular.module('app').controller('findCtrl', function ($scope, $window, $http, mainSrvc) {

  // var options = {
  //   zoom: 4,
  //   center: new google.maps.LatLng(25, 80),
  //   mapTypeId: google.maps.mapTypeId.ROADMAP
  // }
  //
  // $scope.map = new google.maps.Map(document.getElementById('map'), options);
  //
  // $scope.getMap = () => {
  //   mainSrvc
  //     .getMap()
  //     .then(response => {
  //       console.log(response);
  //       $scope.googleMap = response;
  //     })
  // }
  // $scope.getMap();

  ///////////////////////////WORKS-1///////////////////////////////////
  //   $scope.initialize = function() {
  //    var map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //    });
  //   }
  //
  //   google.maps.event.addDomListener(window, 'load', $scope.initialize);
  //
  // $window.map=map;
  /////////////////////////////////////////////////////////////////////
  $scope.map;
  $scope.day = mainSrvc.day;
  $scope.night = mainSrvc.night;
  $scope.mode = $scope.day;
  $scope.modes = function (mode) {
    if (mode === 'day') {
      $scope.mode = $scope.day;
      $scope.gMaps($scope.data1, $scope.num);
    } else if (mode === 'night') {
      $scope.mode = $scope.night;
      $scope.gMaps($scope.data1, $scope.num);
    }
  };
  $scope.current = function () {
    var promise = $http.get('http://ip-api.com/json');
    return promise.then(function (result) {
      $scope.num = 'one';
      $scope.data1 = result.data;
      $scope.gMaps($scope.data1, $scope.num);
    });
  }();

  $scope.gMaps = function (data, para) {
    (function myMap() {
      if (para === 'one') {
        var center = new google.maps.LatLng($scope.data1.lat, $scope.data1.lon);
        var mapOptions = {
          center: center,
          zoom: 13,
          styles: $scope.mode
        };
        var image = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/blue.png';
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.BOUNCE,
          position: center,
          icon: image,
          map: $scope.map
        });
        var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
        $scope.map = marker.setMap(map);
        /// search stufff
      } else if (para === 'two') {
        var center = new google.maps.LatLng($scope.data.lat, $scope.data.lng);
        var mapOptions = {
          center: center,
          zoom: 12,
          styles: $scope.mode
        };
        var image = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/blue.png';
        var marker = new google.maps.Marker({
          position: center,
          map: $scope.map,
          icon: image,
          animation: google.maps.Animation.BOUNCE
        });
        var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
        $scope.map = marker.setMap(map);
        ////// new new ++++++++++++++++ new new ////////

        $scope.infowindow;
        $scope.taco = function (para) {
          $scope.zipshow = true;
          $scope.food = '';
          $scope.tacotype = para;

          $scope.initMap = function () {
            var mycenter = { lat: $scope.data.lat, lng: $scope.data.lng };
            console.log('initMap called');
            $scope.map = new google.maps.Map(document.getElementById('googleMap'), {
              center: mycenter,
              zoom: 12,
              styles: $scope.mode
            });

            $scope.infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService($scope.map);
            service.textSearch({
              location: mycenter,
              radius: 10000,
              query: [$scope.tacotype]
            }, callback);
            console.log('nearbySearch called');
          };

          function callback(results, status) {
            console.log('callback called');
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
              }
            }
          }

          function createMarker(place) {
            var placeLoc = place.geometry.location;
            var image = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/blue.png';
            var marker = new google.maps.Marker({
              map: $scope.map,
              position: place.geometry.location,
              icon: image
            });

            google.maps.event.addListener(marker, 'click', function () {
              $scope.infowindow.setContent(place.name);
              $scope.infowindow.open($scope.map, this);
            });
            console.log('createMarker called');
          }
          // $scope.map = marker.setMap(map)
          $scope.initMap();
        };
        //here
      }
    })();
  };

  $scope.newloc = function (zip) {
    var zip = zip;
    var promise = $http.get("http://ziplocate.us/api/v1/" + zip + "");
    return promise.then(function (result) {
      $scope.data = result.data;
      $scope.num = 'two';
      $scope.gMaps($scope.data, $scope.num);
    });
  };
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

    this.day = [{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "stylers": [{
            "hue": 149
        }, {
            "saturation": -78
        }, {
            "lightness": 0
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "hue": -31
        }, {
            "saturation": -40
        }, {
            "lightness": 2.8
        }]
    }, {
        "featureType": "poi",
        "elementType": "label",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "hue": 163
        }, {
            "saturation": -26
        }, {
            "lightness": -1.1
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "hue": 3
        }, {
            "saturation": -24.24
        }, {
            "lightness": -38.57
        }]
    }];
    this.night = [{
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [{
            "lightness": "-0"
        }, {
            "gamma": "0.00"
        }, {
            "color": "#141b24"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 13
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#144b53"
        }, {
            "lightness": 14
        }, {
            "weight": 1.4
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [{
            "lightness": "-19"
        }, {
            "weight": "0.39"
        }, {
            "gamma": "0.62"
        }, {
            "saturation": "-23"
        }, {
            "color": "#647087"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#5f8091"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "weight": "2.50"
        }, {
            "color": "#151618"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [{
            "weight": "1"
        }, {
            "lightness": "0"
        }, {
            "gamma": "1"
        }, {
            "saturation": "0"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#283c49"
        }, {
            "lightness": "-3"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{
            "gamma": "1"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#202c3b"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "gamma": "1.00"
        }, {
            "color": "#314a30"
        }, {
            "saturation": "0"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "lightness": "-12"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "lightness": "-10"
        }, {
            "weight": "0.70"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "weight": "0.71"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#85744c"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "lightness": 16
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "weight": "1.00"
        }, {
            "lightness": "0"
        }, {
            "gamma": "1.00"
        }, {
            "color": "#1c1d1e"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#488faa"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [{
            "weight": "0.85"
        }, {
            "lightness": "-21"
        }, {
            "saturation": "-9"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#305179"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "invert_lightness": true
        }, {
            "weight": "0.01"
        }, {
            "color": "#4992a1"
        }]
    }];
});
//# sourceMappingURL=bundle.js.map
