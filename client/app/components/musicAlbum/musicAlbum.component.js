import template from './musicAlbum.html';
import controller from './musicAlbum.controller';
import './musicAlbum.styl';

let musicAlbumComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default musicAlbumComponent;
