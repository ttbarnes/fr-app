import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookingsComponent from './bookings.component';

let aboutModule = angular.module('bookings', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('bookings', {
      url: '/bookings',
      template: '<bookings></bookings>'
    });
})

.component('bookings', bookingsComponent);

export default bookingsModule;
