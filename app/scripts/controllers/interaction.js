'use strict';

/**
 * @ngdoc function
 * @name ngChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngChatApp
 */

angular.module('ngChatApp')
  .factory('User', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/users/:id');
  });

angular.module('ngChatApp')
  .factory('Interaction', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/users/:uid/interactions');
  });

angular.module('ngChatApp')
  .factory('CoachingTask', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/users/:uid/coachingTasks');
  });

angular.module('ngChatApp')
  .factory('Message', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/users/:uid/messages');
  });

angular.module('ngChatApp')
  .factory('Client', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/client/:id');
  });

angular.module('ngChatApp')
  .factory('Thread', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/messages/:mid/threads');
  });

angular.module('ngChatApp')
  .controller('InteractionCtrl', function ($scope, User, Thread, Interaction, Message) {
    User.query(function(data) {
      $scope.users = data;
      Message.query({uid: $scope.users[0].id}, function(data) {
        $scope.messages = data;
        console.log(data);
      });
    });


    Thread.query(function(data) {
      $scope.threads = data;
    });

    Interaction.query(function(data) {
      $scope.interactions = data;
    });

    Message.query(function(data) {
      $scope.messages = data;
    });


    $scope.awesomeThings = [];
  });
