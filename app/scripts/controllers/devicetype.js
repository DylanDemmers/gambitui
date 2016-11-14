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

  function deviceTypeCtrl (deviceService) {
    var vm = this;
    vm.devices = [];
    deviceService.getDevices()
    .then(function(result){
      vm.devices = result;      
      return vm.devices;
    })
    .catch(function(error){
      console.error(error.message);
    })

    function update() {
    //handle form input for Device Type Creation
    
    vm.deviceType.deviceType = "laptop";
    //call post branch to copy input to Backend API
    }


    function postBranch(DeviceType){
      //Get object from binded data, call device service postdevicetype(binded data)
    }

  }
