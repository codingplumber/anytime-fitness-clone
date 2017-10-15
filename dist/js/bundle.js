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
  });
  // .state('find', {
  //   url: '/find',
  //   templateUrl: './views/find.html',
  //   controller: 'findCtrl'
  // })
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
