import angular from 'angular';
import Home from './home/home';
import Music from './music/music';
import About from './about/about';
import Gallery from './gallery/gallery';
import Collaborators from './collaborators/collaborators';
import CollaboratorInd from './collaboratorInd/collaboratorInd';
import Equipment from './equipment/equipment';
import Contact from './contact/contact';
import Error from './error/error';

let componentModule = angular.module('app.components', [
  Home.name,
  Music.name,
  About.name,
  Gallery.name,
  Collaborators.name,
  CollaboratorInd.name,
  Equipment.name,
  Contact.name,
  Error.name
]);

export default componentModule;