import angular from 'angular';
import Home from './home/home';
import Music from './music/music';
import MusicAlbum from './musicAlbum/musicAlbum';
import MusicAlbumReviews from './musicAlbumReviews/musicAlbumReviews';
import MusicAlbumAudioCd from './musicAlbumAudioCd/musicAlbumAudioCd';
import Press from './press/press';
import About from './about/about';
import OtherWork from './otherWork/otherWork';
import Gallery from './gallery/gallery';
import GallerySignedPhoto from './gallerySignedPhoto/gallerySignedPhoto';
import Collaborators from './collaborators/collaborators';
import CollaboratorInd from './collaboratorInd/collaboratorInd';
import News from './news/news';
import Videos from './videos/videos';
import NewsInd from './newsInd/newsInd';
import Contact from './contact/contact';
import Gigs from './gigs/gigs';
import Error from './error/error';

let componentModule = angular.module('app.components', [
  Home.name,
  Music.name,
  MusicAlbum.name,
  MusicAlbumReviews.name,
  MusicAlbumAudioCd.name,
  Press.name,
  About.name,
  OtherWork.name,
  Gallery.name,
  GallerySignedPhoto.name,
  Collaborators.name,
  CollaboratorInd.name,
  News.name,
  Videos.name,
  NewsInd.name,
  Contact.name,
  Gigs.name,
  Error.name
]);

export default componentModule;
