import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import angularUiRouterTitle from 'angular-ui-router-title';
import pageslide from 'angular-pageslide-directive';
import modal from 'angular-ui-bootstrap';
import bootstrapLightbox from 'angular-bootstrap-lightbox';
import ezfb from 'angular-easyfb';
import ngtweet from 'ngtweet';
import angulartics from 'angulartics';
import angularticsGA from 'angulartics-google-analytics';
import socialShare from 'angular-socialshare'
import * as CONST from './constants/constants';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngSanitize,
    ngTouch,
    'ui.router.title',
    'pageslide-directive',
    'ui.bootstrap.modal',
    'bootstrapLightbox',
    'ezfb',
    'ngtweet',
    'angulartics',
    'angulartics.google.analytics',
    '720kb.socialshare',
    Common.name,
    Components.name,
    Services.name,
    Filters
  ])

  .config(($locationProvider, $urlRouterProvider, plangularConfigProvider, ezfbProvider, LightboxProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

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

      if (toState.name === 'musicAlbum' ||
          toState.name === 'musicAlbumReviews' ||
            toState.name === 'musicAlbumPhysical') {
        $rootScope.$broadcast('stateMusicAlbum', { active: true });
      } else {
        $rootScope.$broadcast('stateMusicAlbum', { active: false });
      }
      if (toState.name === 'news' ||
          toState.name === 'newsInd') {
        $rootScope.$broadcast('stateNews', { active: true });
      } else {
        $rootScope.$broadcast('stateNews', { active: false });
      }

    });

    $rootScope.$on('$stateChangeSuccess', (e, toState) => {
      if (toState.name !== 'musicAlbumReviews') {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    });

  })

  .component('app', AppComponent);
