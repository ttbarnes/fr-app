import angular from 'angular';
import uiRouter from 'angular-ui-router';
import equipmentComponent from './equipment.component';

let equipmentModule = angular.module('equipment', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('equipment', {
      url: '/equipment',
      template: '<equipment></equipment>'
    });
})

.component('equipment', equipmentComponent);

export default equipmentModule;
