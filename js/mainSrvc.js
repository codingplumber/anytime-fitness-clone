angular.module('app')
.service('mainSrvc', function($http) {

  //////////////////////Geocoding///////////////////////////////////////////
  // const key = 'AIzaSyBnBHEVWA6Gg6Gk68qeAIFfLUkXzwRVNUQ';
  // const geoURL = 'https://maps.googleapis.com/maps/api/geocode/json';

  this.getGeo = (location) => {
    console.log('mainSrvc', location);
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

  
})
