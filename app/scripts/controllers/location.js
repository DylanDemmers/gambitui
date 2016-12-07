(function(){          


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
  function LocationCtrl (locationService, $filter) {
    var vm = this;
    vm.locations = [];
    vm.newType = {};

    function failure(error){
      console.error(error.message);
    }

/*----------------------------------------------Get Locations-------------------------------------------------------------------------*/
   
   
     function activate(){
        getLocations();
     }

   
   function getLocations(){
        locationService.getLocations()
        .then(getLocationSuccess)
        .catch(failure)
        
      function getLocationSuccess(result){
        vm.locations = result;      
        return vm.locations;
      }
    }


   
/*-----------------------------------------------Post Locations-----------------------------------------------------------------------*/
    vm.update = function(Location) {
      var inList = $filter("filter")(vm.locations,{description:Location.Description},true);
     //can write own filterby function, return true
      if(inList.length > 0){
        toastr.error("Location already in Database")
      }
      else{
          var DeviceType = postLocation(Location);
      //setup variable to  call postLocatoin to post object to api
      }
    //setup variable to  call postLocatoin to post object to api
    }

    function postLocation(Location){
    //Object passed in is Encapsulated Object drawn from Update function called in Location.html, call device service postLocation()
      locationService.postLocation(Location)
        .then(success)
        .catch(failure)

    function success(result){
           vm.newType = null;
           activate();
          }
    }


/*------------------------------------------------------Delete Entry---------------------------------------------------------------*/ 

    vm.delete = function (location, index) {
          var alertValue = confirm("You sure you want to delete this Entry?");
                        
              if (alertValue === true) {
                   locationService.deleteLocation(location).then(function(){
                      vm.locations.splice(index, 1);
                      });
                  }    
            };



  activate();
  
}


})();