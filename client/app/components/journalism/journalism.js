import angular from 'angular';
import uiRouter from 'angular-ui-router';
import journalismComponent from './journalism.component';
import { PAGE_TITLE_JOURNALISM } from '../../constants/constants';

let journalismModule = angular.module('journalism', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('journalism', {
      url: '/journalism',
      template: '<journalism></journalism>',
      resolve: {
        $title: () => PAGE_TITLE_JOURNALISM
      }
    });
})

  .component('journalism', journalismComponent);

export default journalismModule;
