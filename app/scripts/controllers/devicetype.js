'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:DevicetypeCtrl
 * @description
 * # DevicetypeCtrl
 * Controller of the gambituiApp
 */


/*---------------------------------------------Device Ctrl Scope setup-------------------------------------------------------------*/

angular.module('gambituiApp')
  .controller('DevicetypeCtrl', deviceTypeCtrl);

  function deviceTypeCtrl (deviceService) {
    var vm = this;
    vm.devices = [];
    vm.newType = {};


/*---------------------------------------------Get Devices--------------------------------------------------------------------------*/

    deviceService.getDevices()
    .then(success)
    .catch(failure)

    function success(result){
      vm.devices = result;      
      return vm.devices;
    }

    function failure(error){
      console.error(error.message);
    }

/*---------------------------------------------Post Devices-------------------------------------------------------------------------*/
    vm.update = function(DeviceType) {

    var DeviceType = postdeviceType(DeviceType);
    //setup variable to  call postLocatoin to post object to api
    }


    function postdeviceType(DeviceType){
      //Object passed in is Encapsulated Object drawn from Update function called in DeviceType.html, call device service postdevicetype()
      deviceService.postdevicetype(DeviceType)
      .then(success)
      .catch(failure)

    function success(result){
        deviceService.getDevices();
        return result;
    }

    function failure(error){
        console.error(error.message);
    }
  }
}
