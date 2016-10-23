import template from './music.html';
import controller from './music.controller';
import './music.styl';

let musicComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default musicComponent;
