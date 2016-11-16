(function(){  
'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.locationService
 * @description
 * # locationService
 * Factory in the gambituiApp.
 */

/*----------------------------------------------------Config Locatoin Service----------------------------------------------------------*/

angular.module('gambituiApp')
  .factory('locationService', locationService);
  
  
  function locationService ($http) {
    return{
      getLocations: getLocations,
      postLocation: postLocation,
    };



/*------------------------------------------------------Get Call to DB---------------------------------------------------------------*/ 
    function getLocations (){
      return $http.get("http://gambitapidev.azurewebsites.net/api/Location_lk")
      .then(success)
      .catch(failure)
    }
    function success(response){
      return response.data;
    }
    function failure(error){
      consolse.error(error.message);
    }


/*------------------------------------------------------Post Call to DB-------------------------------------------------------------------*/
  function postLocation(Location) {
                    return $http({
                        url: "http://gambitapidev.azurewebsites.net/api/Location_lk",
                        method: 'POST',
                        data: Location,
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(postLocationComplete)
                        .catch(postLocationFailed);

    function postLocationComplete(res, data) {                                             
                        toastr.success('New Location was added');
                    return res.data;
                    }

    function postLocationFailed(err) {
                        toastr.warning('New Locaiton wasn\'t added');
                    }
                }
  };
  })();