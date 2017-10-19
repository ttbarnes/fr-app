import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gallerySignedPhotoComponent from './gallerySignedPhoto.component';

let gallerySignedPhotoModule = angular.module('gallerySignedPhoto', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('gallerySignedPhoto', {
      url: '/gallery/signed-photo',
      template: '<gallery-signed-photo></gallery-signed-photo>'
    });
})

.component('gallerySignedPhoto', gallerySignedPhotoComponent);

export default gallerySignedPhotoModule;
