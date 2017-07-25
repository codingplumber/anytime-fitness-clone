angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // $sceDelegateProvider.resourceUrlWhitelist([
  //   // Allow same origin resource loads.
  //   'self',
  //   // Allow loading from our assets domain. **.
  //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.9229483,-85.3601307&radius=50000&type=gym&keyword=fitness&key=AIzaSyCx16yw2rLTZKQt6zhgLQfVjjZdQoCXZew'
  // ]);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('training', {
      url: '/training',
      templateUrl: './views/training.html'
    })
    .state('join', {
      url: '/join',
      templateUrl: './views/join.html'
    })
    .state('find', {
      url: '/find',
      templateUrl: './views/find.html',
      controller: 'findCtrl'
    })

})
