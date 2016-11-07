'use strict';

describe('Controller: BranchCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var BranchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BranchCtrl = $controller('BranchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BranchCtrl.awesomeThings.length).toBe(3);
  });
});
