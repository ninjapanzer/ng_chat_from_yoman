'use strict';

/**
 * @ngdoc function
 * @name ngChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngChatApp
 */
angular.module('ngChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
