import angular from 'angular';
import Header from './header/header';
import Footer from './footer/footer';
import Hero from './hero/hero';

let commonModule = angular.module('app.common', [
  Header.name,
  Footer.name,
  Hero.name
]);

export default commonModule;