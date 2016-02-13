import template from './discography.html';
import controller from './discography.controller';
import './discography.styl';

let discographyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default discographyComponent;
