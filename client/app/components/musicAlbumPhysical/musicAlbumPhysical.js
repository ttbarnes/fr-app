import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumPhysicalComponent from './musicAlbumPhysical.component';

let musicAlbumPhysicalModule = angular.module('musicAlbumPhysical', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('musicAlbumPhysical', {
      url: '/music/album/:id/physical',
      template: '<music-album-physical></music-album-physical>'
    });
})

.component('musicAlbumPhysical', musicAlbumPhysicalComponent);

export default musicAlbumPhysicalModule;
