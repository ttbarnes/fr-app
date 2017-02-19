import angular from 'angular';
import uiRouter from 'angular-ui-router';
import techComponent from './tech.component';
import { PAGE_TITLE_TECH } from '../../constants/constants';

let techModule = angular.module('tech', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('tech', {
      url: '/tech',
      template: '<tech></tech>',
      resolve: {
        $title: () => PAGE_TITLE_TECH
      }
    });
})

.component('tech', techComponent);

export default techModule;
