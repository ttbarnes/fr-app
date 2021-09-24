import template from './reflectionsInBlue.html';
import controller from'./reflectionsInBlue.controller';
import './reflectionsInBlue.styl';

let reflectionsInBlueComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default reflectionsInBlueComponent;
