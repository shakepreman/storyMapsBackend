'use strict';

angular.module('clientApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
      'title': 'Create Story',
      'link': '/'
      },
      {
        'title': 'Create Location',
        'link': '/createLocation'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
