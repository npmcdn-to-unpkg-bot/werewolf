'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.games = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
    });
  }

  $onInit() {
    this.$http.get('/api/games').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('game', this.games);
    });
  }

  addGame() {
    if (this.newThing) {
      this.$http.post('/api/games', { name: this.newGame });
      this.newThing = '';
    }
  }

  deleteGame(game) {
    this.$http.delete('/api/games/' + game._id);
  }
}

angular.module('vagrantApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
