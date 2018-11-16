import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumComponent from './musicAlbum.component';
import albumsService from '../../services/albums.service';
import { PAGE_TITLE_MUSIC_ALBUM } from '../../constants/constants';

let musicAlbumModule = angular.module('musicAlbum', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('musicAlbum', {
      url: '/music/album/:id',
      template: '<music-album></music-album>',
      resolve: {
        album: (albumsService, $stateParams) => {
          return albumsService.getAlbumById($stateParams.id);
        },
        $title: (album) => album.name + PAGE_TITLE_MUSIC_ALBUM
      }
    });
})

.component('musicAlbum', musicAlbumComponent);

export default musicAlbumModule;
