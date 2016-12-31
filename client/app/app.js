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
import * as CONST from './constants/constants';
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

  .config(($locationProvider, $urlRouterProvider, $qProvider, plangularConfigProvider, ezfbProvider, LightboxProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    $qProvider.errorOnUnhandledRejections(false); //prevents state change issue. see https://github.com/angular-ui/ui-router/issues/42#issuecomment-269367965

    plangularConfigProvider.clientId = CONST.PLANGULAR_CLIENT_ID;

    //fb page config
    ezfbProvider.setInitParams({
      appId: CONST.FB_ID
    });

    LightboxProvider.templateUrl = CONST.GALLERY_TEMPLATE_URL;

    LightboxProvider.getImageUrl = function (image) {
      return CONST.GALLERY_IMAGE_URL + image.url;
    };

  })

  .run(($rootScope) => {
    'ngInject';

    //quick fix to get active state class in header
    $rootScope.$on('$stateChangeStart', (e, toState) => {

      if (toState.name === 'collaboratorsInd') {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: true });
      } else {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: false });
      }

      if (toState.name === 'musicAlbum') {
        $rootScope.$broadcast('stateMusicAlbum', { active: true });
      } else {
        $rootScope.$broadcast('stateMusicAlbum', { active: false });
      }
    });

    $rootScope.$on('$stateChangeSuccess', () => {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

  })

  .component('app', AppComponent);
