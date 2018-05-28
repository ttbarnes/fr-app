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
import socialShare from 'angular-socialshare';
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

  .config(($locationProvider, $urlRouterProvider, ezfbProvider, LightboxProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    //fb page config
    ezfbProvider.setInitParams({
      appId: CONST.FB_ID
    });

    LightboxProvider.templateUrl = CONST.GALLERY_TEMPLATE_URL;

    LightboxProvider.getImageUrl = (image) => CONST.IMAGES_URL + image.url;

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
          toState.name === 'musicAlbumPhysical' ||
          toState.name === 'musicAlbumAudioCd') {
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

      const splitCookies = document.cookie.split(';');
      if (splitCookies) {
        let constentCookie = splitCookies.filter(function (item) {
          return item.indexOf('CookieScriptConsent=') >= 0
        });
        let gaCookie = splitCookies.filter(function (item) {
          return item.indexOf('_ga=') >= 0
        });
        const hasRejected = constentCookie.length && constentCookie[0].includes('reject');
        const hasAccepted = constentCookie.length && constentCookie[0].includes('accept');
        const hasGaCookie = gaCookie.length;
        if (hasRejected) {
          window['ga-disable-UA-85971190-2'] = true;
        }
        if (hasAccepted && !hasGaCookie) {
          (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-85971190-2', 'auto', {
            'cookieExpires': 0
          });
          ga('set', 'anonymizeIp', true);
        }

      }
    });

  })

  .component('app', AppComponent);
