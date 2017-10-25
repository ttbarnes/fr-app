import template from './fisArticles.html';
import controller from './fisArticles.controller';
import './fisArticles.styl';

let fisArticlesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default fisArticlesComponent;
