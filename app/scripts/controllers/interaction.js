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
    return $resource('http://elymu-api.herokuapp.com/threads/:tid/messages');
  });

angular.module('ngChatApp')
  .factory('Client', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/client/:id');
  });

angular.module('ngChatApp')
  .factory('Thread', function($resource) {
    return $resource('http://elymu-api.herokuapp.com/interactions/:iid/threads');
  });

angular.module('ngChatApp')
  .controller('InteractionCtrl', function ($scope, User, Thread, Interaction, Message) {
    /* jshint ignore:start */
    User.query(function(data) {
      var uid = data[0].id;
      $scope.users = function(data){
        var users = [];
        for(var i = 0; i<data.length; i++){
          users[data[i].id] = data[i];
        }
        return users;
      }(data);
      $scope.user = data[0];
      Interaction.query({uid: uid}, function(data) {
        $scope.user.interactions = data;
        for(var i=0; i<data.length; i++){
          var iid = $scope.user.interactions[i].id;
          $scope.user.interactions[i].recipient = $scope.users[$scope.user.interactions[i].recipientId];
          var pos = i;
          Thread.query({iid: iid}, function(data) {
            $scope.user.interactions[pos].threads = data;
            for(var j=0; j<data.length; j++){
              var tpos = j;
              var tid = $scope.user.interactions[pos].threads[j].id;
              Message.query({tid: tid}, function(data) {
                $scope.user.interactions[pos].threads[tpos].messages = data;
                for(var g=0; g<data.length; g++){
                  $scope.user.interactions[pos].threads[tpos].messages[g].recipient = $scope.users[$scope.user.interactions[pos].threads[tpos].messages[g].recipientId];
                }
              });
            }
          });
        }
      });
    });
    /* jshint ignore:end */
    $scope.awesomeThings = [];
  });
