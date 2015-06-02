'use strict';

/**
 * @ngdoc overview
 * @name ngChatApp
 * @description
 * # ngChatApp
 *
 * Main module of the application.
 */
angular
  .module('ngChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/interaction.html',
        controller: 'InteractionCtrl'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
