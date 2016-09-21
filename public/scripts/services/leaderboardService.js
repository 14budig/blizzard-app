angular.module('leaderboard').service('leaderboardService', leaderboardService);

leaderboardService.$inject = ['$http', '$q'];
function leaderboardService($http, $q){
  console.log('service');
  var self = this;
  self.ladder = {};
  self.player = {};
  self.getLadder = getLadder;
  self.getPlayer = getPlayer;

  function getLadder(){
    var def = $q.defer();
    $http({
      url:'/api/ladder',
      method: 'GET'
    }).then(onGetLadderSuccess, onError);

    return def.promise;

    function onGetLadderSuccess(response){
      self.ladder = response.data.ladderMembers.slice(0,100);
      def.resolve(self.ladder);
    }
    function onError(error){
      console.log('there was an error: ', error);
      self.ladder.error = {error: error};
      // oh noes!  error - reject the deferred - at this point we get to choose what we send on to the controller
      def.reject(self.ladder.error);
    }
  }
  function getPlayer(){}
}
