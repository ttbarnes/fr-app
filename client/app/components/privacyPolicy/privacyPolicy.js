import angular from 'angular';
import uiRouter from 'angular-ui-router';
import privacyPolicyComponent from './privacyPolicy.component';
import { PAGE_TITLE_PRIVACY_POLICY } from '../../constants/constants';

let privacyPolicyModule = angular.module('privacyPolicy', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('privacyPolicy', {
      url: '/privacy-policy',
      template: '<privacy-policy></privacy-policy>',
      resolve: {
        $title: () => PAGE_TITLE_PRIVACY_POLICY
      }
    });
})

  .component('privacyPolicy', privacyPolicyComponent);

export default privacyPolicyModule;
