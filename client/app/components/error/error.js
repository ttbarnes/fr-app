import angular from 'angular';
import uiRouter from 'angular-ui-router';
import errorComponent from './error.component';

let errorModule = angular.module('error', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('error', {
      url: '/error',
      template: '<error></error>'
    });
})

.component('error', errorComponent);

export default errorModule;
