angular.module('app')
.directive('header', function() {

  return {
    restrict: 'E',
    templateUrl: './views/header.html',
    link: function(scope, elem, att) {

      $(document).ready(function(){
        $('#nav-icon3').click(function(){
          $(this).toggleClass('open');

          $('#header-slide').toggleClass('down');

          $('#header-wrapper-slide').toggleClass('down');
        });

      });
    }
  }

})
