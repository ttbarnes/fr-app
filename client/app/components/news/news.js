import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsComponent from './news.component';
import { PAGE_TITLE_NEWS } from '../../constants/constants';

let newsModule = angular.module('news', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('news', {
      url: '/news',
      template: '<news></news>',
      resolve: {
        $title: () => PAGE_TITLE_NEWS
      }      
    });
})

.component('news', newsComponent);

export default newsModule;
