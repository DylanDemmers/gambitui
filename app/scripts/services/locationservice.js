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
      deleteLocation: deleteLocation,
    };


/*------------------------------------------------------Get Call to DB---------------------------------------------------------------*/ 
    function getLocations (){
      return $http.get(api.path + "Location_lk")
      .then(success)
      .catch(failure)
    }
    function success(response){
      return response.data;
    }
    function failure(error){
      console.error(error.message);
    }


/*------------------------------------------------------Post Call to DB-------------------------------------------------------------------*/
  function postLocation(Location) {
                    return $http({
                        url: api.path + "Location_lk",
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





   function deleteLocation(Location) {
                        return $http({
                            url: api.path + "Location_lk/" + Location.id,
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'}
                        })
                            .then(deleteLocationComplete)
                            .catch(deleteLocationFailed);

                        function deleteLocationComplete(req) {                                             
                            toastr.error('Location Deleted');
                            return req;
                        }

                        function deleteLocationFailed(err) {
                            toastr.warning('Couldn\'t Delete Location');
                        }
                } // closing tag for deleteBranch             
  };
  })();