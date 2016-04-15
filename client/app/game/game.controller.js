'use strict';
(function(){

class GameComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('vagrantApp')
  .component('game', {
    templateUrl: 'app/game/game.html',
    controller: GameComponent
  });

})();
