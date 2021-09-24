import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import angularUiRouterTitle from 'angular-ui-router-title';
import angularUnsafe from 'angular-unsafe';
import pageslide from 'angular-pageslide-directive';
import modal from 'angular-ui-bootstrap';
import bootstrapLightbox from 'angular-bootstrap-lightbox';
import ezfb from 'angular-easyfb';
import angulartics from 'angulartics';
import angularticsGA from 'angulartics-google-analytics';
import * as CONST from './constants/constants';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import AppComponent from './app.component';
import polyfill from './polyfill'
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngSanitize,
    ngTouch,
    'angular.unsafe',
    'ui.router.title',
    'pageslide-directive',
    'ui.bootstrap.modal',
    'bootstrapLightbox',
    'ezfb',
    'angulartics',
    'angulartics.google.analytics',
    Common.name,
    Components.name,
    Services.name,
    Filters
  ])

  .config(($qProvider, $locationProvider, $urlRouterProvider, ezfbProvider, LightboxProvider) => {
    'ngInject';

    // supress 'transition' errors in console
    $qProvider.errorOnUnhandledRejections(false);

    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/error');

    //fb page config
    ezfbProvider.setInitParams({
      appId: CONST.FB_ID
    });

    LightboxProvider.templateUrl = CONST.GALLERY_TEMPLATE_URL;

    LightboxProvider.getImageUrl = (image) => CONST.IMAGES_DIRECTORY + image.url;

    LightboxProvider.fullScreenMode = true;
  })

  .run(($rootScope) => {
    'ngInject';

    $rootScope.$on('$stateChangeStart', (e, toState) => {
      if (toState.name === 'collaboratorsInd') {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: true });
      } else {
        $rootScope.$broadcast('stateCollaboratorsInd', { active: false });
      }

      if (toState.name === 'music' ||
          toState.name === 'musicAlbum' ||
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

      $rootScope.pageTitle = toState.resolve.$title;
      $rootScope.ogTitle = toState.resolve.$ogTitle;
      $rootScope.ogDescription = toState.resolve.$ogDescription;
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
        const hasRejected = constentCookie.length && constentCookie[0].includes('reject');
        const hasAccepted = constentCookie.length && constentCookie[0].includes('accept');
        if (hasRejected) {
          window['ga-disable-UA-85971190-2'] = true;
        }

        if (hasAccepted) {
          if (typeof fbq === 'undefined') {

            !function (f, b, e, v, n, t, s) {
              if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
              n.queue = []; t = b.createElement(e); t.async = !0;
              t.src = v; s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('consent', 'grant'); 
            fbq('init', '1111258039062901');
            fbq('track', 'PageView'); 
          } else {
            fbq('track', 'PageView'); 
          }

        } else if (hasRejected && typeof fbq !== 'undefined') {
          fbq('consent', 'revoke');
        }

      }
    });
  })

  .component('app', AppComponent);
