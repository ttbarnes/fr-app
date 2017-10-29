import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fisArticlesComponent from './fisArticles.component';
import { PAGE_TITLE_FIS_ARTICLES } from '../../constants/constants';

let fisArticlesModule = angular.module('fisArticles', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('fisArticles', {
      url: '/fis-articles',
      template: '<fis-articles></fis-articles>',
      resolve: {
        $title: () => PAGE_TITLE_FIS_ARTICLES
      }
    });
})

.component('fisArticles', fisArticlesComponent);

export default fisArticlesModule;
