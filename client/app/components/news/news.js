import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsComponent from './news.component';

let newsModule = angular.module('news', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('news', {
      url: '/news',
      template: '<news></news>'
    });
})

.component('news', newsComponent);

export default newsModule;
