angular.module('leaderboard').controller('PlayersController', PlayersController);


PlayersController.$inject = ['leaderboardService', '$routeParams', '$scope'];

function PlayersController(leaderboardService, $routeParams, $scope){
  var vm = this;
  $scope.unloaded = true;
  vm.totalGames = 0;
  vm.totalWins = 0;
  vm.player = {};
  leaderboardService.getPlayer($routeParams.id, $routeParams.region, $routeParams.name).then(function(data){
    vm.player = data;
    $scope.unloaded = false;
    vm.player.season.stats.forEach(function(gameType){
      vm.totalGames += gameType.games;
      vm.totalWins += gameType.wins;
    });
    console.log(vm.player);
    console.log(vm.totalGames);
  }, function(error){});
}
