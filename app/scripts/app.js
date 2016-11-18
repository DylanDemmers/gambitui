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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
  
      .when('/deviceType', {
        templateUrl: 'views/devicetype.html',
        controller: 'DevicetypeCtrl',
        controllerAs: 'deviceType'
      })
    
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
        controllerAs: 'location'
      })
   
      .when('/branches', {
        templateUrl: 'views/branches.html',
        controller: 'BranchesCtrl',
        controllerAs: 'branches'
      })
      .when('/asset', {
        templateUrl: 'views/asset.html',
        controller: 'AssetCtrl',
        controllerAs: 'asset'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
