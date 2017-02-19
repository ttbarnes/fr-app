import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import { PAGE_TITLE_HOME } from '../../constants/constants';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      resolve: {
        $title: () => PAGE_TITLE_HOME
      }
    });
})

.component('home', homeComponent);

export default homeModule;
