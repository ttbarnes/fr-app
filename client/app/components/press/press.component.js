import template from './press.html';
import controller from './press.controller';
import './press.styl';

let pressComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default pressComponent;
