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

  // this.test = "service working";


});
//# sourceMappingURL=bundle.js.map
