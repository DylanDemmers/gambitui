(function(){    


'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.deviceService
 * @description
 * # deviceService
 * Factory in the gambituiApp.
 */

/*----------------------------------------------------Config Device Service----------------------------------------------------------*/
angular.module('gambituiApp')
  .factory('deviceService',deviceService);
  
  function deviceService($http){
      return{
        getDevices: getDevices,
        postdevicetype: postdevicetype,
        deleteDevice:   deleteDevice,
  };



/*------------------------------------------------------Get Call to DB---------------------------------------------------------------*/ 
    function getDevices(){
      return $http.get("http://gambitapidev.azurewebsites.net/api/DeviceType_lk")
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
    function postdevicetype(DeviceType) {
                    return $http({
                        url: "http://gambitapidev.azurewebsites.net/api/DeviceType_lk",
                        method: 'POST',
                        data: DeviceType,
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(postDeviceComplete)
                        .catch(postDeviceFailed);

    function postDeviceComplete(res, data) {                                             
                        toastr.success('New Device was added');
                    return res.data;
                    }

    function postDeviceFailed(err) {
                        toastr.warning('New Device wasn\'t added');
                    }
                }

/*------------------------------------------------------Delete Call to DB---------------------------------------------------------------*/ 

    function deleteDevice(DeviceType) {
                    return $http({
                            url: "http://gambitapidev.azurewebsites.net/api/DeviceType_lk/" + DeviceType.id,
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'}
                        })
                            .then(deleteDeviceComplete)
                            .catch(deleteDeviceFailed);

                        function deleteDeviceComplete(req) {                                             
                            toastr.error('Device Deleted');
                            return req;
                        }

                        function deleteDeviceFailed(err) {
                            toastr.warning('Couldn\'t delete Device');
                        }
                } // closing tag for deleteBranch










};
})();