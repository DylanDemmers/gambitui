(function(){
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
  function mainCtrl($uibModal,$filter,assetService,branchService,locationService,deviceService) {
    var vm = this;
    vm.assets = [];
    vm.devices = [];//array to store Devices of getDevices call
    vm.locations = [];//array to store locatoins of getLocations call
    vm.branches = [];
    vm.branchSearch = "";
    vm.deviceSearch = "";
    

    vm.animationEnabled = true;



    function activate(){
        getAssets();
     }

 /*------------------------------------------------------Modal Call to open for Creation and update---------------------------------------------------------------*/ 
 
        vm.update = function(assetInput) {
                                var modalInstance = $uibModal.open({
                                        animation: vm.animationEnabled,
                                        templateUrl: 'devicecreatemodal.html',
                                        controller: 'DevicecreatemodalCtrl',
                                        controllerAs: 'vm', 
                                        resolve: {
                                                assetInput: function() {
                                                        if (assetInput === null || assetInput === undefined) {
                                                                return null;
                                                        }
                                                                return assetInput;
                                                }
                                        }
                                });

                                // when the modal closes it will refresh the data in the array
                                modalInstance.result.then(function(result){
                                        vm.assets = result;
                                        getAssets();
                                });
                        };



/*------------------------------------------------------Delete Entry---------------------------------------------------------------*/ 


          vm.delete = function (Asset, index) {
                var alertValue = confirm("You sure you want to delete this Entry?");
                        
                   if (alertValue === true) {
                         assetService.deleteAsset(Asset).then(function(){
                            vm.assets.splice(index, 1);
                          });
                    }    
                };


 /*-------------------------------------------------------------------Get Devices--------------------------------------------------------------------------- */
          deviceService.getDevices()
            .then(getDevicesSuccess)
            .catch(failure)



            function getDevicesSuccess(result){
              vm.devices = result;      
              return vm.devices;
            }
/*-------------------------------------------------------------------Get Branches--------------------------------------------------------------------------- */
          branchService.getBranches()
            .then(getBranchsSuccess)
            .catch(failure)


            function getBranchsSuccess(result){
                vm.branches = result;      
                return vm.branches;
              }

/*-------------------------------------------------------------------Get locations--------------------------------------------------------------------------- */
          locationService.getLocations()
              .then(getLocationsSuccess)
              .catch(failure)

              function getLocationsSuccess(result){
                  vm.locations = result;      
                  return vm.locations;
                }
/*--------------------------------------------------------------------Get Assets----------------------------------------------------------------------------*/
          function getAssets(){
              assetService.getAssets()
                  .then(getAssetsSuccess)
                  .catch(failure)

                  function getAssetsSuccess(result){
                        vm.assets = result;      
                        return vm.assets;
                    }
          }


/*------------------------------------------------------Filter Devices Table---------------------------------------------------------------*/ 


       vm.onDropdownSelect = function(data){
                var assetsFiltered = $filter("filter")(vm.assets,{branchID:data});
        //can write own filterby function, return true
                if(assetsFiltered.length > 0){
                  vm.search = vm.branchSearch;

                  toastr.success("Filter Applied");
                } 
                else{
                  toastr.warning("No Results Matching that Filter");      
                }

          };
    

    //error handling function for $http call promise
    function failure(error){
      console.error(error.message);
    }


    activate();
  }
  })();