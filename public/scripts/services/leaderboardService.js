angular.module('leaderboard').service('leaderboardService', leaderboardService);

leaderboardService.$inject = ['$http', '$q'];
function leaderboardService($http, $q){
  console.log('service');
  var self = this;
  self.ladder = {};
  self.player = {};
  self.matches = {};
  self.getLadder = getLadder;
  self.getPlayer = getPlayer;
  self.getMatches = getMatches;

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
  function getPlayer(id, region, name){
    var def = $q.defer();
    var url = '/api/players/'+ id + '/' + region + '/' + name;
    console.log('url: ', url);
    $http({
      url: url,
      method:'GET'
    }).then(getPlayerSuccess, function(error){
      console.log(error);
      self.player.error = {error: error};
      def.reject(self.player.error);
    });
    return def.promise

    function getPlayerSuccess(response){
      self.player = response.data;
      def.resolve(self.player);
    }
  }
  function getMatches(id, region, name){
    var def = $q.defer();
    var url = '/api/players/'+ id + '/' + region + '/' + name +'/matches';
    console.log('url: ', url);
    $http({
      url: url,
      method:'GET'
    }).then(getMatchesSuccess, function(error){
      console.log(error);
      self.player.error = {error: error};
      def.reject(self.matches.error);
    });
    return def.promise;
    function getMatchesSuccess(response){
      self.matches = response.data;
      def.resolve(self.matches);
    }
  }
}
