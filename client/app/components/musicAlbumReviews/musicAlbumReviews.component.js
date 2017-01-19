import template from './musicAlbumReviews.html';
import controller from './musicAlbumReviews.controller';
import './musicAlbumReviews.styl';

let musicAlbumReviewsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default musicAlbumReviewsComponent;
