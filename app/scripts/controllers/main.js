'use strict';

/**
 * @ngdoc function
 * @name ngChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngChatApp
 */
angular.module('ngChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
