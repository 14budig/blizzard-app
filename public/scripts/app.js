console.log('Hello World!');


angular.module('leaderboard', ['ngRoute']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/index',
      controllerAs: 'indexCtrl',
      controller: 'IndexController'
    });
}
