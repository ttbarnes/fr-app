import template from './journalism.html';
import controller from './journalism.controller';
import './journalism.styl';

let journalismComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default journalismComponent;
