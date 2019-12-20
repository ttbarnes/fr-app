import angular from 'angular';
import uiRouter from 'angular-ui-router';
import promiseLoadingComponent from './promiseLoading.component';

let promiseLoadingModule = angular.module('promiseLoading', [
  uiRouter
])

  .component('promiseLoading', promiseLoadingComponent);

export default promiseLoadingModule;
