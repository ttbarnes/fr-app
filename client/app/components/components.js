import angular from 'angular';
import Home from './home/home';
import Discography from './discography/discography';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
  Home.name,
  Discography.name,
  Contact.name
]);

export default componentModule;