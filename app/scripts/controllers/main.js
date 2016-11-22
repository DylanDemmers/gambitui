'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gambituiApp
 */
angular.module('gambituiApp')
  .controller('MainCtrl', mainCtrl);

//injecting this throws a unknown injector error $uibModal,
  function mainCtrl(assetService,branchService,locationService,deviceService) {
    var vm = this;
    vm.assets = [];
    vm.devices = [];//array to store Devices of getDevices call
    vm.locations = [];//array to store locatoins of getLocations call
    vm.branches = [];
    vm.branchSearch = {};
    vm.deviceSearch = "";
    

    vm.animationEnabled = true;


     vm.open = function() {
            var modalInstance = $uibModal.open({
              animation: vm.animationEnabled,
              templateUrl: 'devicecreatemodal.html',
              controller: 'DevicecreatemodalCtrl',
              controllerAs: 'vm',   
            });
            // modalInstance to return getInspectors when closing inspectorModal
            modalInstance.result.then(function(){
              getAssets();
            });
          }; // closing tag for modal


 /*-------------------------------------------------------------------Get Devices--------------------------------------------------------------------------- */
     deviceService.getDevices()
       .then(function(result){
        vm.devices = result;      
        return vm.devices;
       })
      .catch(failure)

/*-------------------------------------------------------------------Get Branches--------------------------------------------------------------------------- */
    branchService.getBranches()
       .then(function(result){
          vm.branches = result;      
          return vm.branches;
         })
        .catch(failure)

/*-------------------------------------------------------------------Get locations--------------------------------------------------------------------------- */
    locationService.getLocations()
        .then(function(result){
            vm.locations = result;      
            return vm.locations;
          })
        .catch(failure)

    

    //error handling function for $http call promise
    function failure(error){
      console.error(error.message);
    }



  assetService.getAssets()
    .then(function(result){
      vm.assets = result;      
      return vm.assets;
    })
    .catch(failure)

  
    
  }
