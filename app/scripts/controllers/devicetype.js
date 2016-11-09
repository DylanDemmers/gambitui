'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:DevicetypeCtrl
 * @description
 * # DevicetypeCtrl
 * Controller of the gambituiApp
 */
angular.module('gambituiApp')
  .controller('DevicetypeCtrl', deviceTypeCtrl);

  function BranchesCtrl (deviceService) {
    var vm = this;
    vm.devices = [];
    deviceservice.getDevices()
    .then(function(result){
      vm.devices = result;      
      return vm.devices;
    })
    .catch(function(error){
      console.error(error.message);
    })


//handle form input for Device Type Creation
    $scope.input = {};
    $scope.update = function(DeviceType){
      $scope.input = angular.copy(DeviceType)
    };





  }
