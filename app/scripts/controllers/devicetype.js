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

  function deviceTypeCtrl (deviceService, $filter) {
    var vm = this;
    vm.devices = [];
    vm.newType = {};
    function failure(error){
            console.error(error.message);
        }

/*---------------------------------------------Get Devices--------------------------------------------------------------------------*/

  function activate(){
    getDevices();
  }

  function getDevices(){
     deviceService.getDevices()
    .then(getDevicesSuccess)
    .catch(failure)

    function getDevicesSuccess(result){
      vm.devices = result;      
      return vm.devices;
    }
  }
/*---------------------------------------------Post Devices-------------------------------------------------------------------------*/
    vm.update = function(DeviceType) {
     var inList = $filter("filter")(vm.devices,{desciption:DeviceType.desciption},true);
     //can write own filterby function, return true
      if(inList.length > 0){
        toastr.error("Device type already in Database")
      }
      else{
          var DeviceType = postdeviceType(DeviceType);
      //setup variable to  call postLocatoin to post object to api
      }

    }


    function postdeviceType(DeviceType){
      //Object passed in is Encapsulated Object drawn from Update function called in DeviceType.html, call device service postdevicetype()
      deviceService.postdevicetype(DeviceType)
      .then(success)
      .catch(failure)

        function success(result){
           activate();
        }


  }

/*------------------------------------------------------Delete Entry---------------------------------------------------------------*/ 

    vm.delete = function (DeviceType, index) {
          var alertValue = confirm("You sure you want to delete this Entry?");
                        
              if (alertValue === true) {
                   deviceService.deleteDevice(DeviceType).then(function(){
                      vm.devices.splice(index, 1);
                      });
                  }    
            };















activate();
}
