'use strict';

describe('Controller: AssetCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var AssetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetCtrl = $controller('AssetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetCtrl.awesomeThings.length).toBe(3);
  });
});
