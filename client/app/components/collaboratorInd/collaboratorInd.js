import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collaboratorIndComponent from './collaboratorInd.component';

let collaboratorIndModule = angular.module('collaboratorInd', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('collaboratorsInd', {
      url: '/collaborators/:id',
      template: '<collaborators-ind></collaborators-ind>'
    });
})


.component('collaboratorInd', collaboratorIndComponent);

export default collaboratorIndModule;
