'use strict';

describe('Component: GameComponent', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var GameComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    GameComponent = $componentController('GameComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
