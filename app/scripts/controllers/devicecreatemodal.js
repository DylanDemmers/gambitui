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


    vm.assetObj = assetInput;//passed in object that comes from main.html

/*------------------------------------------------------Resolve Passed in object---------------------------------------------------------------*/ 

    if (vm.assetObj === null) {                                     //Handles modal resolve, If assetObj == NULL, set object members to null
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
                    } else if (vm.assetObj.id > 0) {                 //Otherwise, If passed in object has an ID> 0
                            vm.assetInput = vm.assetObj;             //Bind the passed in object to assetInput   
                    }


/*------------------------------------------------------Decide to Update Data or Create Data---------------------------------------------------------------*/ 


 vm.createOrUpdate = function (form, assetInput) {                                                                              //Passes in form and Object         
                        if (!form.$invalid) {                                                                                   //Validates form
                                if(vm.assetInput.id !== null && vm.assetInput.id !== undefined && vm.assetInput.id > 0) {       //If form is valid and object exsits previously, update object
                                        update(assetInput);
                                } else {
                                        create(assetInput);                                                                     //Otherwise, create new object
                                }
                        }
                };



/*------------------------------------------------------Update In Modal---------------------------------------------------------------*/ 


  function update(Input) {                                                           //Update function takes a previously created object as input
                      assetService.editAsset(Input).then(function () {               //assetService Call to edit asset, passes previously created object,    
                                activate();                                          //Within promise, get assets is called to update array                                   
                                vm.closeModal(vm.assets);                            //CLoses Madal and passes data to satisfy modal promise   
                                toastr.info(Input.name + ' was updated');
                        });
                }



/*------------------------------------------------------Create In Modal---------------------------------------------------------------*/ 

 function create(data) {
     var inList = $filter("filter")(vm.assets,{name:data.name},true);                //creates array of assets that has a name that matches an exsisting name in the assets array   
     //can write own filterby function, return true
      if(inList.length > 0){                                                         //If array is greater than 0, Do not allow POST   
        toastr.error("Entry already in Database");
      }
      else{
          postasset(data);
          vm.closeModal(vm.assets);                                                  //CLose modal and pass assets array to satisfy modal promise           
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