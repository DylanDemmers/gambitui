'use strict';

describe('Controller: BranchesCtrl', function () {

  // load the controller's module
  beforeEach(module('gambituiApp'));

  var BranchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BranchesCtrl = $controller('BranchesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BranchesCtrl.awesomeThings.length).toBe(3);
  });
});
