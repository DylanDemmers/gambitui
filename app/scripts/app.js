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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/deviceType', {
        templateUrl: 'views/devicetype.html',
        controller: 'DevicetypeCtrl',
        controllerAs: 'deviceType'
      })
      .when('/locationyo', {
        templateUrl: 'views/locationyo.html',
        controller: 'LocationyoCtrl',
        controllerAs: 'locationyo'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
        controllerAs: 'location'
      })
      .when('/branch', {
        templateUrl: 'views/branch.html',
        controller: 'BranchCtrl',
        controllerAs: 'branch'
      })
      .when('/branches', {
        templateUrl: 'views/branches.html',
        controller: 'BranchesCtrl',
        controllerAs: 'branches'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
