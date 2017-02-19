import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import { PAGE_TITLE_ABOUT } from '../../constants/constants';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>',
      resolve: {
        $title: () => PAGE_TITLE_ABOUT
      }
    });
})

.component('about', aboutComponent);

export default aboutModule;
