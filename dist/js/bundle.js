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

angular.module('app').controller('findCtrl', function ($scope, mainSrvc, $http) {

  var lat, lng, map, infoWindow;

  ////////////////////////// MAPS ///////////////////////////////////////////
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

  /////////////////// Get User's Location //////////////////////////////////

  $scope.myLoc = function () {
    map = new google.maps.Map(document.getElementById('map'), {
      // center: { lat: 39.50, lng: -98.35 },
      zoom: 13
    });
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  ///////////////////// GEOCODING //////////////////////////////////////////

  // Turn address or zip into geolocation
  $scope.getGeo = function (location) {
    mainSrvc.getGeo(location).then(function (response) {
      lat = response.lat;
      lng = response.lng;

      $scope.initMap(lat, lng);
    });

    $scope.location = '';
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

angular.module('app').directive('tripleHover', function () {

  return {
    restrict: 'A',
    link: function link(scope, element, attribute) {

      element.on('mouseover', function () {
        if ($(this).attr('id') === 'join-one') {
          $('div.join-img-1').addClass('join-t-hover');
        } else if ($(this).attr('id') === 'join-two') {
          $('div.join-img-2').addClass('join-t-hover');
        } else if ($(this).attr('id') === 'join-three') {
          $('div.join-img-3').addClass('join-t-hover');
        }
      });

      element.on('mouseout', function () {
        console.log(element);
        console.log('mouseout');
        $("div.join-t-img").removeClass('join-t-hover');
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

  //////////////////////Geocoding///////////////////////////////////////////
  // const key = 'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ';
  // const geoURL = 'https://maps.googleapis.com/maps/api/geocode/json';

  this.getGeo = function (location) {
    console.log('mainSrvc', location);
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
      console.log('geolocation error:', error);
    });
  };
});
//# sourceMappingURL=bundle.js.map
