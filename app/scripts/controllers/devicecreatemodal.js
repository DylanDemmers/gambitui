'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:DevicecreatemodalCtrl
 * @description
 * # DevicecreatemodalCtrl
 * Controller of the gambituiApp
 */
angular.module('gambituiApp')
  .controller('DevicecreatemodalCtrl',DevicecreatemodalCtrl);


 function DevicecreatemodalCtrl ($uibModalInstance,$filter,assetService,branchService,locationService,deviceService) {
    var vm = this;
 
    var assetObj = {};//stores empty object that POST data will be encapsulated in
    vm.branches = [];//array to store branches of getBranches call
    vm.devices = [];//array to store Devices of getDevices call
    vm.locations = [];//array to store locatoins of getLocations call
    vm.assets = [];//array to store assets of getAssets call


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


     assetService.getAssets()
     .then(function(result){
           vm.assets = result;
           return vm.assets;
         })
      .catch(failure)
     
  
    

    

    //error handling function for $http call promise
    function failure(error){
      console.error(error.message);
    }




 



  function activate(){
    assetService.getAssets();
  }

 vm.update = function(assetObj) {
     var inList = $filter("filter")(vm.assets,{name:assetObj.Name},true);
     //can write own filterby function, return true
      if(inList.length > 0){
        toastr.error("Device type already in Database");
      }
      else{
          var assetObj = postasset(assetObj);
          activate();
          vm.closeModal();
      //setup variable to  call postLocatoin to post object to api
      }

    }


     function postasset(assetObj){
      //Object passed in is Encapsulated Object drawn from Update function called in DeviceType.html, call device service postdevicetype()
      assetService.postAsset(assetObj)
      .then(success)
      .catch(failure)

        function success(result){
           activate();
        }
      }


        vm.cancel = function () {
              $uibModalInstance.dismiss('cancel');
              activate();
        };

        vm.closeModal = function () {
                $uibModalInstance.close();
                activate();
        };


activate();
}