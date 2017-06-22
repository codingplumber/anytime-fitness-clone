angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

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

})
