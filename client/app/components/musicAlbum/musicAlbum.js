import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumComponent from './musicAlbum.component';

let musicAlbumModule = angular.module('musicAlbum', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('musicAlbum', {
      url: '/music/album/:id',
      template: '<music-album></music-album>'
    });
})

.component('musicAlbum', musicAlbumComponent);

export default musicAlbumModule;
