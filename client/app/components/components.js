import angular from 'angular';
import Home from './home/home';
import Discography from './discography/discography';

let componentModule = angular.module('app.components', [
  Home.name,
  Discography.name
]);

export default componentModule;