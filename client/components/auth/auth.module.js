'use strict';

angular.module('vagrantApp.auth', [
  'vagrantApp.constants',
  'vagrantApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
