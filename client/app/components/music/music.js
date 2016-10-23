import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicComponent from './music.component';

let musicModule = angular.module('music', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('music', {
      url: '/music',
      template: '<music></music>'
    });
})

.component('music', musicComponent);

export default musicModule;
