angular.module('app')
.directive('hoverIncrease', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $('div.home-middle-div').hover(function() {
        element.css("cursor", "pointer");
        element.toggle(function() {
          element.css({
            'height': '110%',
            'width': '110%'
          });
        });


        console.log('here')
      });
    }
  }



});
