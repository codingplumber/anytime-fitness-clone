angular.module('app')
.service('mainSrvc', function($http) {

  //////////////////////Geocoding///////////////////////////////////////////
  const key = 'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ';
  const geoURL = 'https://maps.googleapis.com/maps/api/geocode/json'

  this.getGeo = (location) => {
    // console.log('mainSrvc', location);
    // var location = loc;
    return $http.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params: {
        address:location,
        key:'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ'
      }
    })
    .then(response => {
      // Log full response
      // console.log(response);
      // Formatted geolocation
      // console.log(response.data.results[0].geometry.location);
      var res = response.data.results[0].geometry.location;
      return res;
    })
    .catch(error => {
      console.log('geolocation error:', error);
    })
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

})
