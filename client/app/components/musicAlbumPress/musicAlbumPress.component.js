import template from './musicAlbumPress.html';
import controller from './musicAlbumPress.controller';
import './musicAlbumPress.styl';

let musicAlbumPressComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default musicAlbumPressComponent;
