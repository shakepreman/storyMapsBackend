'use strict';

angular.module('clientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createLocation', {
        url: '/createLocation',
        templateUrl: 'app/createLocation/createLocation.html',
        controller: 'CreateLocationCtrl'
      });
  });