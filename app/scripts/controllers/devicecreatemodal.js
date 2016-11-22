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


 function DevicecreatemodalCtrl ($uibModalInstance) {
    var vm = this;
 


        vm.cancel = function () {
              $uibModalInstance.dismiss('cancel');
        };

        vm.closeModal = function () {
                $uibModalInstance.close();
        };

    
    
  }