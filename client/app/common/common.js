import angular from 'angular';
import Header from './header/header';
import Footer from './footer/footer';
import Hero from './hero/hero';
import Album from './album/album';
import SignupForm from './signupForm/signupForm';
import plangular from './plangular/plangular'

let commonModule = angular.module('app.common', [
  Header.name,
  Footer.name,
  Hero.name,
  Album.name,
  SignupForm.name,
  plangular.name
]);

export default commonModule;