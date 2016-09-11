import angular from 'angular';
import Home from './home/home';
import Discography from './discography/discography';
import About from './about/about';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';
import Error from './error/error';

let componentModule = angular.module('app.components', [
  Home.name,
  Discography.name,
  About.name,
  Gallery.name,
  Contact.name,
  Error.name
]);

export default componentModule;