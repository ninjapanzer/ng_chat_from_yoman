"use strict";angular.module("ngChatApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/interaction.html",controller:"InteractionCtrl"}).when("/manage",{templateUrl:"views/manage.html",controller:"ManageCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ngChatApp").factory("User",["$resource",function(a){return a("http://elymu-api.herokuapp.com/users/:id",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").factory("Interaction",["$resource",function(a){return a("http://elymu-api.herokuapp.com/users/:uid/interactions",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").factory("CoachingTask",["$resource",function(a){return a("http://elymu-api.herokuapp.com/users/:uid/coachingTasks",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").factory("Message",["$resource",function(a){return a("http://elymu-api.herokuapp.com/threads/:tid/messages",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").factory("Client",["$resource",function(a){return a("http://elymu-api.herokuapp.com/client/:id",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").factory("Thread",["$resource",function(a){return a("http://elymu-api.herokuapp.com/interactions/:iid/threads",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",isArray:!0}})}]),angular.module("ngChatApp").controller("InteractionCtrl",["$scope","User","Thread","Interaction","Message",function(a,b,c,d,e){b.query(function(b){var f=b[0].id;a.users=function(a){for(var b=[],c=0;c<a.length;c++)b[a[c].id]=a[c];return b}(b),a.user=b[0],d.query({uid:f},function(b){console.log(b),a.user.interactions=b;for(var d=0;d<b.length;d++){var f=a.user.interactions[d].id;a.user.interactions[d].recipient=a.users[a.user.interactions[d].recipientId];var g=d;c.query({iid:f},function(b){a.user.interactions[g].threads=b;for(var c=0;c<b.length;c++){var d=c,f=a.user.interactions[g].threads[c].id;e.query({tid:f},function(b){a.user.interactions[g].threads[d].messages=b;for(var c=0;c<b.length;c++)a.user.interactions[g].threads[d].messages[c].recipient=a.users[a.user.interactions[g].threads[d].messages[c].recipientId]})}})}})}),a.awesomeThings=[]}]),angular.module("ngChatApp").controller("ManageCtrl",["$scope",function(a){a.awesomeThings=[]}]);