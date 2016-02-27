import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Services.name
  ])
  .config(($locationProvider, $urlRouterProvider, plangularConfigProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise("/error");
    plangularConfigProvider.clientId = '209756cdccc1f718176cea87c3b77f99';
  })

  .component('app', AppComponent);
