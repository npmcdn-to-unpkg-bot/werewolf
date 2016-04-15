'use strict';

angular.module('vagrantApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('card', {
        url: '/card',
        template: '<card></card>'
      });
  });
