import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pressComponent from './press.component';
import { PAGE_TITLE_PRESS } from '../../constants/constants';

let pressModule = angular.module('press', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('press', {
      url: '/press',
      template: '<press></press>',
      resolve: {
        $title: () => PAGE_TITLE_PRESS
      }
    });
})

.component('press', pressComponent);

export default pressModule;
