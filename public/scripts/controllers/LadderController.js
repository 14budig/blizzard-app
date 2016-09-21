angular.module('leaderboard').controller('LadderController', LadderController);

LadderController.$inject = ['leaderboardService'];

function LadderController(leaderboardService){
  var vm = this;leaderboardService.getLadder().then(function(stuff){
    console.log(stuff);
  }, function(otherStuff){});
}
