'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    $scope.story = {
      name: '',
      thumbnailUrl: '',
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
        console.log($scope.story);
        $http.post('/api/stories', $scope.story).success(function(data) {
          alert("Created story with id:"+data._id);
          $state.go('createLocation');
        });
      }
    };
  });
