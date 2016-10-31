import template from './album.html';
import controller from './album.controller';
import './album.styl';

let albumComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default albumComponent;
