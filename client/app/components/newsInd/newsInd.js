import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsIndComponent from './newsInd.component';
import newsService from '../../services/news.service';
import { PAGE_TITLE_NEWS } from '../../constants/constants';

let newsIndModule = angular.module('newsInd', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('newsInd', {
      url: '/news/:title',
      template: '<news-ind></news-ind>',
      resolve: {
        newsPost: (newsService, $stateParams) => {
          return newsService.getSingle($stateParams.title).then((data) => {
            return data[0];
          });
        },
        $title: (newsPost) => {
          return newsPost.title + ' - ' + PAGE_TITLE_NEWS;
        }
      }
    });
})

.component('newsInd', newsIndComponent);

export default newsIndModule;
