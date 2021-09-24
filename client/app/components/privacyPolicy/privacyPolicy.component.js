import template from './privacyPolicy.html';
import controller from './privacyPolicy.controller';
import './privacyPolicy.styl';

let privacyPolicyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default privacyPolicyComponent;
