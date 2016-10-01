import template from './collaborators.html';
import controller from './collaborators.controller';
import './collaborators.styl';

let collaboratorsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default collaboratorsComponent;
