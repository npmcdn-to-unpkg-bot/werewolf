'use strict';

angular.module('vagrantApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        template: '<game></game>'
      });
  });
