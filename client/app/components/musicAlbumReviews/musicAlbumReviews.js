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
      template: '<music-album-reviews></music-album-reviews>'
    });
})

.component('musicAlbumReviews', musicAlbumReviewsComponent);

export default musicAlbumReviewsModule;
