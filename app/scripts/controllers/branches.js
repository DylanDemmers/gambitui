


'use strict';

/**
 * @ngdoc function
 * @name gambituiApp.controller:BranchesCtrl
 * @description
 * # BranchesCtrl
 * Controller of the gambituiApp
 */
angular.module('gambituiApp')
  .controller('BranchesCtrl', BranchesCtrl);

  function BranchesCtrl (branchService) {
    var vm = this;
    vm.branches = [];




  branchService.getBranches()
      .then(function(result){
        vm.branches = result;      
        return vm.branches;
      })
      .catch(function(error){
        console.error(error.message);
      })
  }
