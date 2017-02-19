import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicComponent from './music.component';
import { PAGE_TITLE_MUSIC } from '../../constants/constants';

let musicModule = angular.module('music', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('music', {
      url: '/music',
      template: '<music></music>',
      resolve: {
        $title: () => PAGE_TITLE_MUSIC
      }
    });
})

.component('music', musicComponent);

export default musicModule;
