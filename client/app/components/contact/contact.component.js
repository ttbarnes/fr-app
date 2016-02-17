import template from './contact.html';
import controller from './contact.controller';
import './contact.styl';

let contactComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default contactComponent;
