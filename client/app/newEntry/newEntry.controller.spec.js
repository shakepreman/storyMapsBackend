'use strict';

describe('Controller: NewEntryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NewEntryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewEntryCtrl = $controller('NewEntryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
