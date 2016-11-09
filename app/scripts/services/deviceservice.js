(function(){    


'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.deviceService
 * @description
 * # deviceService
 * Factory in the gambituiApp.
 */
angular.module('gambituiApp')
  .factory('deviceService',deviceService);
  
  function deviceService($https){
      return{
        getDevices: getDevices,
  };

    function getDevices(){
      return http.get("http://gambitapidev.azurewebsites.net/api/DeviceType_lk")
        .then(success)
        .catch(failure)
  }

    function success(response){
      return response.data;
  }
    function failure(error){
      consolse.error(error.message);
  }



// function to post branch
  function postdevicetype(DeviceType) {
                    return $http({
                        url: api.path + 'DeviceType',
                        method: 'POST',
                        data: DeviceType,
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(postDeviceComplete)
                        .catch(postDeviceFailed);

                    function postDeviceComplete(res, data) {                                             
                        toastr.success('New Device was added');
                        return getDevices();
                    }

                    function postDeviceFailed(err) {
                        toastr.warning('New Device wasn\'t added');
                    }
                }


};
})();