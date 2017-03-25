import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pressComponent from './press.component';

let pressModule = angular.module('press', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('press', {
      url: '/press',
      template: '<press></press>'
    });
})

.component('press', pressComponent);

export default pressModule;
