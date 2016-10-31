import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumComponent from './album.component';

let albumModule = angular.module('album', [
  uiRouter
])

.component('album', albumComponent);

export default albumModule;
