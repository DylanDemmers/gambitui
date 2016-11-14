'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the gambituiApp
 */
angular.module('gambituiApp')
  .controller('LocationCtrl', LocationCtrl);
  function LocationCtrl (locationService) {
    var vm = this;
    vm.locations = [];
    locationservice.getLocations()
    .then(function(result){
      vm.locations = result;      
      return vm.locations;
    })
    .catch(function(error){
      console.error(error.message);
    })
   
  }
