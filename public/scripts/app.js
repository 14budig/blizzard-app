console.log('Hello World!');


angular.module('leaderboard', ['ngRoute']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/ladder',
      controllerAs: 'ladderCtrl',
      controller: 'LadderController'
    }).when('/profile/:id/:region/:name/', {
      controllerAs: 'playersCtrl',
      controller:'PlayersController',
      templateUrl: '/templates/player'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}
