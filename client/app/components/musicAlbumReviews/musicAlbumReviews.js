import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumReviewsComponent from './musicAlbumReviews.component';
import albumsService from '../../services/albums.service';
import { PAGE_TITLE_MUSIC_ALBUM_REVIEWS } from '../../constants/constants';

let musicAlbumReviewsModule = angular.module('musicAlbumReviews', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('musicAlbumReviews', {
      url: '/music/album/:id/reviews',
      template: '<music-album-reviews></music-album-reviews>',
      resolve: {
        album: (albumsService, $stateParams) => {
          return albumsService.getSingleAlbum($stateParams.id);
        },
        $title: (album) => album.name + PAGE_TITLE_MUSIC_ALBUM_REVIEWS
      }
    });
})

.component('musicAlbumReviews', musicAlbumReviewsComponent);

export default musicAlbumReviewsModule;
