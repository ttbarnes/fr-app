import angular from 'angular';
import uiRouter from 'angular-ui-router';
import discographyComponent from './discography.component';

let discographyModule = angular.module('discography', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('discography', {
      url: '/discography',
      template: '<discography></discography>'
    });
})

.component('discography', discographyComponent);

export default discographyModule;
