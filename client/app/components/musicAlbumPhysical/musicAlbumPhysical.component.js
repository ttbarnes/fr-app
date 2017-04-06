import template from './musicAlbumPhysical.html';
import controller from './musicAlbumPhysical.controller';
import './musicAlbumPhysical.styl';

let musicAlbumPhysicalComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default musicAlbumPhysicalComponent;
