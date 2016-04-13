'use strict';

angular.module('clientApp')
  .controller('CreateLocationCtrl', function ($scope, $http, $state) {
    $scope.stories = [];
    $scope.locations = [];
    $scope.story = '';
    $scope.prevLocation = '';

    $http.get('/api/stories').success(function(data) {
      $scope.stories = data;
      $scope.story = $scope.stories[0]._id;
    });

    $http.get('/api/locations').success(function(data) {
      $scope.locations = data;
    });

    $scope.location = {
      name: '',
      subTitle: '',
      description: '',
      url: '',
      urlType: 'video',
      latitude: '',
      longitude: '',
      nextLocationId: ''
    };

    $scope.createLocation = function(valid){
      if(valid){
        // Save new location
        $http.post('/api/locations', $scope.location).success(function(data) {
          alert("Created location with id:"+data._id);

          // Add location to story
          $http.get('/api/stories/'+$scope.story).success(function(result) {
            if(result.nextLocationId == ''){
              result.nextLocationId = data._id;
            }
            $http.post('/api/stories/updateArray/'+$scope.story, {data: data._id}).success(function(data1) {
              console.log('Updated story'+data1._id);
              console.log(data1);
            });
            var updateData = {
              nextLocationId: result.nextLocationId
            };
            console.log('updating with');
            console.log(updateData);
            $http.put('/api/stories/'+$scope.story, updateData).success(function(result1) {
              console.log('Updated story'+result1._id);
              console.log(result1);
            });
          });

          // Update prevLocation
          if($scope.prevLocation != ''){
            var updateData = {
              nextLocationId: data._id
            };
            console.log('updating with');
            console.log(updateData);
            $http.put('/api/locations/'+$scope.prevLocation, updateData).success(function(result) {
              console.log('Updated location'+result._id);
              console.log(result);
            });
          }

          $state.go($state.current, {}, {reload: true});});
      }
    };

  });
