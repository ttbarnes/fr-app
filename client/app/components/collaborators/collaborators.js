import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collaboratorsComponent from './collaborators.component';
import { PAGE_TITLE_COLLABORATORS } from '../../constants/constants';

let collaboratorsModule = angular.module('collaborators', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('collaborators', {
      url: '/collaborators',
      template: '<collaborators></collaborators>',
      resolve: {
        $title: () => PAGE_TITLE_COLLABORATORS
      }
    });
})

.component('collaborators', collaboratorsComponent);

export default collaboratorsModule;
