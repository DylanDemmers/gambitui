(function(){
'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.branchService
 * @description
 * # branchService
 * Factory in the gambituiApp.
 */
angular.module('gambituiApp')
  .factory('branchService', branchService);
  
  function branchService($http) {
    return {
      getBranches: getBranches,      
    };
    
    function getBranches(){
      return $http.get("http://gambitapidev.azurewebsites.net/api/Branch_lk")
      .then(success)
      .catch(failure)
    }

    function success(response){
      return response.data;
    }

    function failure(error){
      console.error(error);
    }
  };  
})();