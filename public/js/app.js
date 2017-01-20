'use strict';//boss on client

var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('../css/app.scss');

require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController',
  })
  /*.when('/movie', {
    templateUrl: 'views/movie.html',
    controller: 'MovieController',
  })*/
  .when('/city',{
    templateUrl:'views/city.html',
    controller:'CityController',
  })
  .when('/theatre', {
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController',
  })
  .when('/time', {
    templateUrl: 'views/time.html',
    controller: 'TimeController',
  })
  .when('/admin',{
    templateUrl:'views/admin.html',
    controller:'AdminController',
  })
  .when('/user',{
    templateUrl:'views/user.html',
    controller:'UserController',
  })
  .when('/seats',{
    templateUrl:'views/seats.html',
    controller:'SeatController',
  })
  .when('/assignmovie',{
    templateUrl:'views/assignmovie.html',
    controller:'AssignmovieController',
  })
  // .when('/login',{
  //   templateUrl:'views/login.html',
  //   controller:'UserController',
  // })
  .otherwise({
    redirectTo: '/home',
  });
});
