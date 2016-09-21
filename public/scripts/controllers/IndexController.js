console.log('yo!');

angular.module('leaderboard').controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController($http){}
