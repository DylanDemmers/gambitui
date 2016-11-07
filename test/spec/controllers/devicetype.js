'use strict';

describe('Controller: DevicetypeCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var DevicetypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevicetypeCtrl = $controller('DevicetypeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevicetypeCtrl.awesomeThings.length).toBe(3);
  });
});
