import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gigsComponent from './gigs.component';
import { PAGE_TITLE_GIGS} from '../../constants/constants';

let gigsModule = angular.module('gigs', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('gigs', {
      url: '/gigs',
      template: '<gigs></gigs>',
      resolve: {
        $title: () => PAGE_TITLE_GIGS
      }
    });
})

.component('gigs', gigsComponent);

export default gigsModule;
