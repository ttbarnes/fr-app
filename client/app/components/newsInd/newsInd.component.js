import template from './newsInd.html';
import controller from './newsInd.controller';
import './newsInd.styl';

let newsIndComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newsIndComponent;
