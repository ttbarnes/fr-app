import angular from 'angular';
import uiRouter from 'angular-ui-router';
import grammyAwardsComponent from './grammyAwards.component';
import { PAGE_TITLE_GRAMMY_AWARDS } from '../../constants/constants';

let grammyAwardsModule = angular.module('grammyAwards', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('grammyAwards', {
        url: '/grammy-awards',
        template: '<grammy-awards></grammy-awards>',
        resolve: {
          $title: () => PAGE_TITLE_GRAMMY_AWARDS
        }
      });
  })

  .component('grammyAwards', grammyAwardsComponent);

export default grammyAwardsModule;
