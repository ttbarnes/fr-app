import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import pageslide from 'angular-pageslide-directive';
import modal from 'angular-ui-bootstrap';
import bootstrapLightbox from 'angular-bootstrap-lightbox';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngSanitize,
    ngTouch,
    'pageslide-directive',
    'ui.bootstrap.modal',
    'bootstrapLightbox',
    Common.name,
    Components.name,
    Services.name
  ])

  .config(($locationProvider, $urlRouterProvider, plangularConfigProvider, LightboxProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    plangularConfigProvider.clientId = '209756cdccc1f718176cea87c3b77f99';

    LightboxProvider.templateUrl = '../app/components/gallery/modal.html';
  })

  .run(($rootScope) => {
    'ngInject';
    $rootScope.$on('$stateChangeSuccess', () => {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  })

  .component('app', AppComponent);
