import angular from 'angular';
import uiRouter from 'angular-ui-router';
import promiseErrorComponent from './promiseError.component';

let promiseErrorModule = angular.module('promiseError', [
  uiRouter
])

  .component('promiseError', promiseErrorComponent);

export default promiseErrorModule;
