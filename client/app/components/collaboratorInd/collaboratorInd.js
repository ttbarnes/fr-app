import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collaboratorIndComponent from './collaboratorInd.component';
import collaboratorsService from '../../services/collaborators.service';
import { PAGE_TITLE_COLLABORATOR_IND } from '../../constants/constants';

let collaboratorIndModule = angular.module('collaboratorInd', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('collaboratorsInd', {
      url: '/collaborators/:id',
      template: '<collaborator-ind></collaborator-ind>',
      resolve: {
        collab: (collaboratorsService, $stateParams) => {
          return collaboratorsService.getAll().then((data) => {
            const collab = data.find((c) => c.urlName === $stateParams.id);
            return collab;
          });
        },
        // collaborator: (collab) => collab,
        $title: (collab) => {
          return collab.name + PAGE_TITLE_COLLABORATOR_IND;
        }
      }
    });
})

.component('collaboratorInd', collaboratorIndComponent);

export default collaboratorIndModule;
