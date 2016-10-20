import template from './hero.html';
import controller from './hero.controller';
import './hero.styl';

let heroComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    view: '@',
    title: '@',
    imgUrl: '@',
    imgAlt: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default heroComponent;