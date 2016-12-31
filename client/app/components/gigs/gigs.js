import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gigsComponent from './gigs.component';

let gigsModule = angular.module('gigs', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('gigs', {
      url: '/gigs',
      template: '<gigs></gigs>'
    });
})

.component('gigs', gigsComponent);

export default gigsModule;
