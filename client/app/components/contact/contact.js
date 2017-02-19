import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactComponent from './contact.component';
import { PAGE_TITLE_CONTACT } from '../../constants/constants';

let contactModule = angular.module('contact', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('contact', {
      url: '/contact',
      template: '<contact></contact>',
      resolve: {
        $title: () => PAGE_TITLE_CONTACT
      }
    });
})

.component('contact', contactComponent);

export default contactModule;
