import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Hero from './hero/hero';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  Footer.name
]);

export default commonModule;