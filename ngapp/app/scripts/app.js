'use strict';

angular.module('notesApp', ['ngResource'])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = "!";

    $routeProvider
      .when('/notes', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/notes/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  });
