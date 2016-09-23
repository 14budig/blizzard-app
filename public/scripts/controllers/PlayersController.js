angular.module('leaderboard').controller('PlayersController', PlayersController);


PlayersController.$inject = ['leaderboardService', '$routeParams', '$scope'];

function PlayersController(leaderboardService, $routeParams, $scope){
  var vm = this;
  $scope.unloaded = true;
  $scope.noMatches = false;
  vm.totalGames = 0;
  vm.totalWins = 0;
  vm.player = {};
  vm.matches =[];
  leaderboardService.getPlayer($routeParams.id, $routeParams.region, $routeParams.name).then(function(data){
    vm.player = data;
    vm.player.season.stats.forEach(function(gameType){
      vm.totalGames += gameType.games;
      vm.totalWins += gameType.wins;

    });
    leaderboardService.getMatches($routeParams.id, $routeParams.region, $routeParams.name)
    .then(function(response){
      console.log(response.matches);
      if(response.matches){
        vm.matches = response.matches.slice(0,5);
        console.log(vm.matches);
      }
      else{
        $scope.noMatches = true;
      }
      $scope.unloaded = false;
    }, function(data){
      console.log(data);
    });
  });
}
