'use strict';

/**
 * @ngdoc overview
 * @name gambituiApp
 * @description
 * # gambituiApp
 *
 * Main module of the application.
 */
angular
  .module('gambituiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
       // requireADLogin: true
      })
  
      .when('/deviceType', {
        templateUrl: 'views/devicetype.html',
        controller: 'DevicetypeCtrl',
        controllerAs: 'deviceType',
       // requireADLogin: true
      })
    
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
        controllerAs: 'location',
       // requireADLogin: true
      })
   
      .when('/branches', {
        templateUrl: 'views/branches.html',
        controller: 'BranchesCtrl',
        controllerAs: 'branches',
        //requireADLogin: true
      })
      .when('/asset', {
        templateUrl: 'views/asset.html',
        controller: 'AssetCtrl',
        controllerAs: 'asset',
       // requireADLogin: true
      })
      .when('/deviceCreateModal', {
        templateUrl: 'views/devicecreatemodal.html',
        controller: 'DevicecreatemodalCtrl',
        controllerAs: 'deviceCreateModal'
      })
      .otherwise({
        redirectTo: '/'
      });

      /* adalAuthenticationServiceProvider.init({
        tenant: api.adal.tenant,
        clientId: api.adal.clientId, 
      }, $httpProvider);*/

  }]);
