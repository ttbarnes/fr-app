import template from './videos.html';
import controller from './videos.controller';
import './videos.styl';

let videosComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default videosComponent;
