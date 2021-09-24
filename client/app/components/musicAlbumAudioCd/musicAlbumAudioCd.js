import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumAudioCdComponent from './musicAlbumAudioCd.component';

let musicAlbumAudioCdModule = angular.module('musicAlbumAudioCd', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('musicAlbumAudioCd', {
      url: '/music/album/:id/audio-cd',
      template: '<music-album-audio-cd></music-album-audio-cd>',
      resolve: {
        album: (albumsService, $stateParams) => {
          return albumsService.getAlbumById($stateParams.id);
        },
        $title: (album) => {
          return 'Audio CD - ' + album.name + ' - Fiona Ross';
        }
      }
    });
})

.component('musicAlbumAudioCd', musicAlbumAudioCdComponent);

export default musicAlbumAudioCdModule;
