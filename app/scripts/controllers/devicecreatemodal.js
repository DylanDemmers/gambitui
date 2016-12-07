(function(){  
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

/*------------------------------------------------------Modal Setup---------------------------------------------------------------*/ 

 function DevicecreatemodalCtrl ($uibModalInstance,$filter,assetInput,assetService,branchService,locationService,deviceService) {
    var vm = this;
 
    var assetObj = {};//stores empty object that POST data will be encapsulated in
    vm.branches = [];//array to store branches of getBranches call
    vm.devices = [];//array to store Devices of getDevices call
    vm.locations = [];//array to store locatoins of getLocations call
    vm.assets = [];//array to store assets of getAssets call


    vm.assetObj = assetInput;//passed in object

/*------------------------------------------------------Resolve Passed in object---------------------------------------------------------------*/ 

    if (vm.assetObj === null) {
                            vm.assetInput = {
                                    deviceTypeID: null,
                                    locationID:null,
                                    branchID:null,
                                    name:null,
                                    manufacturer:null,
                                    size:null,
                                    model:null,
                                    operatingSystem:null,
                            };
                    } else if (vm.assetObj.id > 0) {
                            vm.assetInput = vm.assetObj;
                    }


/*------------------------------------------------------Decide to Update Data or Create Data---------------------------------------------------------------*/ 


 vm.createOrUpdate = function (form, assetInput) {
                        if (!form.$invalid) {
                                if(vm.assetInput.id !== null && vm.assetInput.id !== undefined && vm.assetInput.id > 0) {
                                        update(assetInput);
                                } else {
                                        create(assetInput);
                                }
                        }
                        activate();
                };



/*------------------------------------------------------Update In Modal---------------------------------------------------------------*/ 


  function update(Input) {
                      assetService.editAsset(Input).then(function () {
                                vm.closeModal(vm.assets);
                                toastr.info(Input.name + ' was updated');
                        });
                }



/*------------------------------------------------------Create In Modal---------------------------------------------------------------*/ 

 function create(data) {
     var inList = $filter("filter")(vm.assets,{name:data.name},true);
     //can write own filterby function, return true
      if(inList.length > 0){
        toastr.error("Entry already in Database");
      }
      else{
          postasset(data);
          vm.closeModal(vm.assets);
      }
    }


function postasset(assetObj){
      assetService.postAsset(assetObj)
      .then(success)
      .catch(failure)

        function success(result){
           activate();
        }
      }    

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

/*--------------------------------------------------------------------Get Assets------------------------------------------------------------------------------ */

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
       
        vm.cancel = function () {
              $uibModalInstance.dismiss('cancel');
        };

        vm.closeModal = function (data) {
                $uibModalInstance.close(data);
        };
}

})();