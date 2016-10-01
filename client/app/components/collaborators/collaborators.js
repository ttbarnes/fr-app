import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collaboratorsComponent from './collaborators.component';

let collaboratorsModule = angular.module('collaborators', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('collaborators', {
      url: '/collaborators',
      template: '<collaborators></collaborators>'
    });
})

.component('collaborators', collaboratorsComponent);

export default collaboratorsModule;
