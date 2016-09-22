angular.module('leaderboard').controller('PlayersController', PlayersController);


PlayersController.$inject = ['leaderboardService', '$routeParams'];

function PlayersController(leaderboardService, $routeParams){
  var vm = this;
  vm.player = {};
  leaderboardService.getPlayer($routeParams.id, $routeParams.region, $routeParams.name).then(function(data){
    console.log(data);
    vm.player = data;
    console.log(vm.player)
  }, function(error){});
}
