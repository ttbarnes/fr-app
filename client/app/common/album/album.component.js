import template from './album.html';
import controller from './album.controller';
import './album.styl';

let albumComponent = {
  transclude: true,
  restrict: 'E',
  bindings: {
    data: '=',
    layout: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default albumComponent;
