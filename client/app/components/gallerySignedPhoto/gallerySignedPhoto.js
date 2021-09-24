import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gallerySignedPhotoComponent from './gallerySignedPhoto.component';
import { PAGE_TITLE_GALLERY_SIGNED_PHOTO } from '../../constants/constants';

let gallerySignedPhotoModule = angular.module('gallerySignedPhoto', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('gallerySignedPhoto', {
      url: '/gallery/signed-photo',
      template: '<gallery-signed-photo></gallery-signed-photo>',
      resolve: {
        $title: () => {
          return PAGE_TITLE_GALLERY_SIGNED_PHOTO;
        }
      }
    });
})

.component('gallerySignedPhoto', gallerySignedPhotoComponent);

export default gallerySignedPhotoModule;
