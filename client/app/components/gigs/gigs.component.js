import template from './gigs.html';
import controller from './gigs.controller';
import './gigs.styl';

let gigsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default gigsComponent;
