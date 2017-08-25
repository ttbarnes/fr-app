import template from './signupForm.html';
import './signupForm.styl';

let signupFormComponent = {
  template,
  bindings: {
    heading: '@'
  },
  controllerAs: 'vm'
};

export default signupFormComponent;
