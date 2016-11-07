'use strict';

describe('Service: branchService', function () {

  // load the service's module
  beforeEach(module('gambituiApp'));

  // instantiate service
  var branchService;
  beforeEach(inject(function (_branchService_) {
    branchService = _branchService_;
  }));

  it('should do something', function () {
    expect(!!branchService).toBe(true);
  });

});
