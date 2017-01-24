import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsIndComponent from './newsInd.component';

let newsIndModule = angular.module('newsInd', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('newsInd', {
      url: '/news/:id',
      template: '<news-ind></news-ind>'
    });
})

.component('newsInd', newsIndComponent);

export default newsIndModule;
