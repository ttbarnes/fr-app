import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import pageslide from 'angular-pageslide-directive';
import modal from 'angular-ui-bootstrap';
import bootstrapLightbox from 'angular-bootstrap-lightbox';
import ezfb from 'angular-easyfb';
import ngtweet from 'ngtweet';
import angulartics from 'angulartics';
import angularticsGA from 'angulartics-google-analytics';
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
    'ezfb',
    'ngtweet',
    'angulartics',
    'angulartics.google.analytics',
    Common.name,
    Components.name,
    Services.name
  ])

  .config(($locationProvider, $urlRouterProvider, plangularConfigProvider, ezfbProvider, LightboxProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    plangularConfigProvider.clientId = '209756cdccc1f718176cea87c3b77f99';

    //fb page config
    ezfbProvider.setInitParams({
      appId: '1779328982334234'
    });

    LightboxProvider.templateUrl = '../app/components/gallery/modal.html';

    LightboxProvider.getImageUrl = function (image) {
      return 'https://fr-app.herokuapp.com/images/gallery/' + image.url;
    };

  })

  .run(($rootScope) => {
    'ngInject';

    //quick fix to get active state class in header for collabInd
    $rootScope.$on('$stateChangeStart', (e, toState) => {
      if (toState.name === 'collaboratorsInd') {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: true });
      } else {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: false });
      }
    });

    $rootScope.$on('$stateChangeSuccess', () => {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

  })

  .component('app', AppComponent);
