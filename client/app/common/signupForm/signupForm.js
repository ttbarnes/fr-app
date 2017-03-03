import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupFormComponent from './signupForm.component';

let signupFormModule = angular.module('signupForm', [
  uiRouter
])

.component('signupForm', signupFormComponent);

export default signupFormModule;
