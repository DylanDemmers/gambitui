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


  function mainCtrl(assetService) {
    var vm = this;
    vm.assets = [];
  }
