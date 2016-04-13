'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    $scope.story = {
      name: '',
      description: '',
      mapUrl: '',
      locations:[],
      difficulty: 'easy',
      nextLocationId: '',
      latitude: '',
      longitude: ''
    };

    $scope.createStory = function(valid){
      if(valid){
        $http.post('/api/stories', $scope.story).success(function(data) {
          alert("Created story with id:"+data._id);
          $state.go('createLocation');
        });
      }
    };
  });
