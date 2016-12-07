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

  function mainCtrl($uibModal,$filter,assetService,branchService,locationService,deviceService) {
    var vm = this;
    vm.assets = []; //array to store Assets of getassets call
    vm.devices = [];//array to store Devices of getDevices call
    vm.locations = [];//array to store locatoins of getLocations call
    vm.branches = []; // array to store branches of getAssets call
    vm.branchSearch = "";//Empty string used to bind branch search Dropdown Selection too
    vm.deviceSearch = "";//Empty string used to bind device search text input to
    

    vm.animationEnabled = true;//Animation For Modal




    //Function used to update array after entry. Seperated from Getassets call to avoid promise conflict
    function activate(){
        getAssets();
     }

 /*------------------------------------------------------Modal Call to open for Creation and update---------------------------------------------------------------*/ 

        vm.update = function(assetInput) {                                        //update called from HTML, object passed in by index
                                    var modalInstance = $uibModal.open({              //Instansiate Instance of Modal call
                                            animation: vm.animationEnabled,           //Setup
                                            templateUrl: 'devicecreatemodal.html',    //Html template used for modal
                                            controller: 'DevicecreatemodalCtrl',      //Controller name used for the modal
                                            controllerAs: 'vm',                       //Modal Scope name
                                            resolve: {
                                                    assetInput: function() {                                          //Resolve AssetInput that is passed into the modal
                                                            if (assetInput === null || assetInput === undefined) {    //If a null object is passed in, Return NUll
                                                                    return null;
                                                            }
                                                                    return assetInput;                                //Otherwise, Return Object
                                                    }
                                            }
                                     });

                                                                                  
                                    modalInstance.result.then(function(result){       // when the modal closes it will refresh the data in the array                             
                                            vm.assets = result;
                                            getAssets();
                                    });
                            };



/*------------------------------------------------------Delete Entry---------------------------------------------------------------*/ 


          vm.delete = function (Asset, index) {                                         //Function to delete Row, an Object and a row index is passed in
                var alertValue = confirm("You sure you want to delete this Entry?");    
                        
                   if (alertValue === true) {
                         assetService.deleteAsset(Asset).then(function(){               //Service Call to delete
                            vm.assets.splice(index, 1);                                 //Object is still in assets array, Splice Handles removal 
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


       vm.onDropdownSelect = function(data){                                            //Filter for branchSearch
                var assetsFiltered = $filter("filter")(vm.assets,{branchID:data});      //Array of assets whos branchID matches the branchID of data, data is equal to branchSearch model binding
        //can write own filterby function, return true
                if(assetsFiltered.length > 0){                                          //If array contains some filtered material
                  vm.search = vm.branchSearch;                                          //Assign the branchSearch value to a temp Search value which allows for repeated filtering  

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