import template from './gallery.html';
import controller from './gallery.controller';
import './gallery.styl';

let galleryComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default galleryComponent;
