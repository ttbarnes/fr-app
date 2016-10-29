import angular from 'angular';
import uiRouter from 'angular-ui-router';
import techComponent from './tech.component';

let techModule = angular.module('tech', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('tech', {
      url: '/tech',
      template: '<tech></tech>'
    });
})

.component('tech', techComponent);

export default techModule;
