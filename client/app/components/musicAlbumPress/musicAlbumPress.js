import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumPressComponent from './musicAlbumPress.component';

let musicAlbumPressModule = angular.module('musicAlbumPress', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('musicAlbumPress', {
      url: '/music/album/:id/press',
      template: '<music-album-press></music-album-press>'
    });
})

.component('musicAlbumPress', musicAlbumPressComponent);

export default musicAlbumPressModule;
