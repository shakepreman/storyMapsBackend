'use strict';

angular.module('clientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newEntry', {
        url: '/newEntry',
        templateUrl: 'app/newEntry/newEntry.html',
        controller: 'NewEntryCtrl'
      });
  });