import angular from 'angular';
import uiRouter from 'angular-ui-router';
import musicAlbumReviewsComponent from './musicAlbumReviews.component';

let musicAlbumReviewsModule = angular.module('musicAlbumReviews', [
  uiRouter
])

.component('musicAlbumReviews', musicAlbumReviewsComponent);

export default musicAlbumReviewsModule;
