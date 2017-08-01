angular.module('app')
.directive('tripleHover', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {

      element.on('mouseover', function() {
        if ($(this).attr('id') === 'join-one') {
          $('div.join-img-1').addClass('join-t-hover');
        } else if ($(this).attr('id') === 'join-two') {
          $('div.join-img-2').addClass('join-t-hover');
        } else if ($(this).attr('id') === 'join-three') {
          $('div.join-img-3').addClass('join-t-hover');
        }
      });


      element.on('mouseout', function() {
        console.log(element);
        console.log('mouseout');
        $("div.join-t-img").removeClass('join-t-hover');
      });
    }
  }

})
