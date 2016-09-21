angular.module('leaderboard').service('leaderboardService', leaderboardService);

leaderboardService.$inject = ['$http', '$q'];
function leaderboardService($http, $q){
  console.log('service');
  var self = this;
  self.leaderboard = {};
  self.player = {};
  self.getBoard = getBoard;
  self.getPlayer = getPlayer;

  function getBoard(){}
  function getPlayer(){}
}
