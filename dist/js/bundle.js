'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // $sceDelegateProvider.resourceUrlWhitelist([
  //   // Allow same origin resource loads.
  //   'self',
  //   // Allow loading from our assets domain. **.
  //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew'
  // ]);

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

  // var lat,
  //     lng;

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
      console.log(lat, lng);

      $scope.initMap(lat, lng);
    });

    $scope.location = '';
  };

  /////////////////////Places//////////////////////////////////////////////

  // $scope.getPlaces = () => {
  //   mainSrvc
  //     .getPlaces()
  //     .then(response => {
  //       console.log('ctrl', response);
  //     })
  // }

  //////////// practice hitting api ///////////////////////////
  $scope.getPlaces = function () {
    return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew').then(function (response) {
      console.log('srvc', response);
    }).catch(function (error) {
      console.log('places error:', error);
    });
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
      console.log('geolocation error:', error);
    });
  };

  ////////////////////////Places///////////////////////////////////////////
  // AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew
  // 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew'
  // 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

  //   // var location = "34.9229483,-85.3601307";
  //   // var keyword = "anytime fitness"
  //   return $http({
  //     method: 'GET',
  //     // 'JSONP'
  //     url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew'
  //   })

  // this.getPlaces = () => {
  //   return $json.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew')
  //   .then(response => {
  //     console.log('srvc', response)
  //   })
  //   .catch(error => {
  //     console.log('places error:', error);
  //   })
  // };

  // ,{
  // //   params: {
  // //     location:location,
  // //     radius: 500,
  // //     // ^ 50000 max...
  // //     keyword: keyword,
  // //     key: 'AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew'
  // //   }

  // XMLHttpRequest cannot load https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.92…50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8080' is therefore not allowed access.

  //////////////////////////////Whitepages//////////////////////////////////
  // this.getPlaces() => {
  //
  // }
});
//# sourceMappingURL=bundle.js.map
