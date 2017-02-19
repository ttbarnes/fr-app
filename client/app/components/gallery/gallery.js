import angular from 'angular';
import uiRouter from 'angular-ui-router';
import galleryComponent from './gallery.component';
import { PAGE_TITLE_GALLERY } from '../../constants/constants';

let galleryModule = angular.module('gallery', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      template: '<gallery></gallery>',
      resolve: {
        $title: () => PAGE_TITLE_GALLERY
      }
    });
})

.component('gallery', galleryComponent);

export default galleryModule;
