import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reflectionsInBlueComponent from './reflectionsInBlue.component';
import { PAGE_TITLE_REFLECTIONS_IN_BLUE } from '../../constants/constants';

let reflectionsInBlueModule = angular.module('reflectionsInBlueByAudreyRoss', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('reflectionsInBlue', {
        url: '/reflections-in-blue-by-audrey-ross',
        template: '<reflections-in-blue></reflections-in-blue>',
        resolve: {
          $title: () => PAGE_TITLE_REFLECTIONS_IN_BLUE
        }
      });
  })

  .component('reflectionsInBlue', reflectionsInBlueComponent);

export default reflectionsInBlueModule;
