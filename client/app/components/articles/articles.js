import angular from 'angular';
import uiRouter from 'angular-ui-router';
import articlesComponent from './articles.component';
import { PAGE_TITLE_ARTICLES } from '../../constants/constants';

let articlesModule = angular.module('articles', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('articles', {
      url: '/articles',
      template: '<articles></articles>',
      resolve: {
        $title: () => PAGE_TITLE_ARTICLES
      }
    });
})

  .component('articles', articlesComponent);

export default articlesModule;
