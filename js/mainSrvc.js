angular.module('app')
.service('mainSrvc', function($http) {

  // const baseURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAGhSp6JMWAFvrvAA_8vXh3HR11TBus5Y&callback=initMap'
  //
  // function initMap() {
  //   var options = {
  //     zoom: 13,
  //     center: { lat: 42.3601, lng: -71.0589 }
  //   }
  // }
  //
  // // var map = new google.maps.Map(document.getElementById('map'), options);
  //
  // this.getMap = () => {
  //   var map = new google.maps.Map(document.getElementById('map'), options);
  //   return $http({
  //     method: 'GET',
  //     url: baseURL
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     return response.data;
  //   })
  // }
  /////////////////////////////////////////


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
      console.log(error);
    })
  }


})
