'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the gambituiApp
 */

/*---------------------------------------------Location Ctrl Scope setup-------------------------------------------------------------*/

angular.module('gambituiApp')
  .controller('LocationCtrl', LocationCtrl);
  function LocationCtrl (locationService) {
    var vm = this;
    vm.locations = [];
    vm.newType = {};


/*----------------------------------------------Get Locations-------------------------------------------------------------------------*/
    locationService.getLocations()
    .then(success)
    .catch(failure)

    function success(result){
      vm.locations = result;      
      return vm.locations;
    }

    function failure(error){
      console.error(error.message);
    }
   
/*-----------------------------------------------Post Locations-----------------------------------------------------------------------*/
    vm.update = function(Location) {
   
    var Location = postLocation(Location); 
    //setup variable to  call postLocatoin to post object to api

    }


    function postLocation(Location){
    //Object passed in is Encapsulated Object drawn from Update function called in Location.html, call device service postLocation()
      locationService.postLocation(Location)
        .then(success)
        .catch(failure)

    function success(result){
            locationService.getLocations();
            return result;
          }

    function failure(error){
            console.error(error.message);
          }
    }
}
