import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import pageslide from 'angular-pageslide-directive';
import photoswipe from 'ng-photoswipe';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngSanitize,
    'pageslide-directive',
    'ngPhotoswipe',
    Common.name,
    Components.name,
    Services.name
  ])

  .config(($locationProvider, $urlRouterProvider, plangularConfigProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    plangularConfigProvider.clientId = '209756cdccc1f718176cea87c3b77f99';
  })

  .run(($rootScope) => {
    'ngInject';
    $rootScope.$on('$stateChangeSuccess', () => {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  })

  .component('app', AppComponent);
