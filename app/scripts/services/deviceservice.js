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
      return http.get(api + "/devices")
        .then(success)
        .catch(failure)
  }

    function success(response){
      return response.data;
  }
    function failure(error){
      consolse.error(error.message);
  }

};
})();