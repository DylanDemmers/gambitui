'use strict';

describe('Controller: DevicecreatemodalCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var DevicecreatemodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevicecreatemodalCtrl = $controller('DevicecreatemodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevicecreatemodalCtrl.awesomeThings.length).toBe(3);
  });
});
