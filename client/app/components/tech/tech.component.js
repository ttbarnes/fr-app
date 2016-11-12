import template from './tech.html';
import controller from './tech.controller';
import './tech.styl';

let techComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default techComponent;
