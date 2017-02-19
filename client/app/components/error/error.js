import angular from 'angular';
import uiRouter from 'angular-ui-router';
import errorComponent from './error.component';
import { PAGE_TITLE_ERROR } from '../../constants/constants';

let errorModule = angular.module('error', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('error', {
      url: '/error',
      template: '<error></error>',
      resolve: {
        $title: () => PAGE_TITLE_ERROR
      }
    });
})

.component('error', errorComponent);

export default errorModule;
