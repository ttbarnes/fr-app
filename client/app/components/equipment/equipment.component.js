import template from './equipment.html';
import controller from './equipment.controller';
import './equipment.styl';

let equipmentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default equipmentComponent;
