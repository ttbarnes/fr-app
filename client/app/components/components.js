import angular from 'angular';
import Home from './home/home';
import Music from './music/music';
import MusicAlbum from './musicAlbum/musicAlbum';
import MusicAlbumReviews from './musicAlbumReviews/musicAlbumReviews';
import About from './about/about';
import Gallery from './gallery/gallery';
import Collaborators from './collaborators/collaborators';
import CollaboratorInd from './collaboratorInd/collaboratorInd';
import Tech from './tech/tech';
import Contact from './contact/contact';
import Bookings from './bookings/bookings';
import Error from './error/error';

let componentModule = angular.module('app.components', [
  Home.name,
  Music.name,
  MusicAlbum.name,
  MusicAlbumReviews.name,
  About.name,
  Gallery.name,
  Collaborators.name,
  CollaboratorInd.name,
  Tech.name,
  Contact.name,
  Bookings.name,
  Error.name
]);

export default componentModule;