import angular from 'angular';
import Header from './header/header';
import Footer from './footer/footer';
import Hero from './hero/hero';
import Album from './album/album';
import SignupForm from './signupForm/signupForm';
import StickySocial from './stickySocial/stickySocial';
import PromiseError from './promiseError/promiseError';
import PromiseLoading from './promiseLoading/promiseLoading';

let commonModule = angular.module('app.common', [
  Header.name,
  Footer.name,
  Hero.name,
  Album.name,
  SignupForm.name,
  StickySocial.name,
  PromiseError.name,
  PromiseLoading.name
]);

export default commonModule;
