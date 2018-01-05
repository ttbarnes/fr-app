import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videosComponent from './videos.component';
import { PAGE_TITLE_VIDEOS } from '../../constants/constants';

let videosModule = angular.module('videos', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('videos', {
      url: '/videos',
      template: '<videos></videos>',
      resolve: {
        $title: () => PAGE_TITLE_VIDEOS
      }
    });
})

.component('videos', videosComponent);

export default videosModule;
