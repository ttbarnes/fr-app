import template from './articles.html';
import controller from './articles.controller';
import './articles.styl';

let articlesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default articlesComponent;
