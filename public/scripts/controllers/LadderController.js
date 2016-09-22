angular.module('leaderboard').controller('LadderController', LadderController);

LadderController.$inject = ['leaderboardService'];

function LadderController(leaderboardService){
  var vm = this;
  leaderboardService.getLadder().then(function(data){
    console.log(data);
    vm.players = data;
  }, function(otherStuff){});
}
