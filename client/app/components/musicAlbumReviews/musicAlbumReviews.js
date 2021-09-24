import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumReviewsComponent from './musicAlbumReviews.component';

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
          return albumsService.getAlbumById($stateParams.id);
        },
        $title: (album) => {
          return 'Reviews - ' + album.name + ' - Fiona Ross';
        }
      }
    });
})

.component('musicAlbumReviews', musicAlbumReviewsComponent);

export default musicAlbumReviewsModule;
