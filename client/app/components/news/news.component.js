import template from './news.html';
import controller from './news.controller';
import './news.styl';

let newsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newsComponent;
