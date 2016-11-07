'use strict';

describe('Controller: LocationyoCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var LocationyoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationyoCtrl = $controller('LocationyoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LocationyoCtrl.awesomeThings.length).toBe(3);
  });
});
