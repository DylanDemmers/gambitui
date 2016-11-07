(function(){  
'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.locationService
 * @description
 * # locationService
 * Factory in the gambituiApp.
 */
angular.module('gambituiApp')
  .factory('locationService', locationService);
  
  
  function locationService ($https) {
    return{
      getLocations: getLocations,
    };

    function getLocations (){
      return http.get(api + "/locations")
      .then(success)
      .error(failure)
    }
    function success(response){
      return response.data;
    }
    function failure(error){
      consolse.error(error.message);
    }
  };
  })();