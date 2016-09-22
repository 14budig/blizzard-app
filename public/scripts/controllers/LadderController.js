angular.module('leaderboard').controller('LadderController', LadderController);

LadderController.$inject = ['leaderboardService', '$scope'];

function LadderController(leaderboardService, $scope){
  var vm = this;
  $scope.unloaded = true;
  leaderboardService.getLadder().then(function(data){
    console.log(data);
    vm.players = data;
    $scope.unloaded=false;
  }, function(otherStuff){});
}
