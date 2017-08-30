import angular from 'angular';
import uiRouter from 'angular-ui-router';
import stickySocialComponent from './stickySocial.component';

let stickySocialModule = angular.module('stickySocial', [
  uiRouter
])

.component('stickySocial', stickySocialComponent);

export default stickySocialModule;
