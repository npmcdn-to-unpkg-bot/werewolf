'use strict';
(function(){

class CardComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('vagrantApp')
  .component('card', {
    templateUrl: 'app/card/card.html',
    controller: CardComponent
  });

})();
