import angular from 'angular';
import uiRouter from 'angular-ui-router';
import otherWorkComponent from './otherWork.component';
import { PAGE_TITLE_OTHER_WORK } from '../../constants/constants';

let otherWorkModule = angular.module('otherWork', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('otherWork', {
      url: '/other-work',
      template: '<other-work></other-work>',
      resolve: {
        $title: () => PAGE_TITLE_OTHER_WORK
      }
    });
})

  .component('otherWork', otherWorkComponent);

export default otherWorkModule;
