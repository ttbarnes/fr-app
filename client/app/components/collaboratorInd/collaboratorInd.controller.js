class CollaboratorIndController {
  constructor($state, $stateParams, collaboratorsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.collaboratorsService = collaboratorsService;

    this.collab = this.collaboratorsService.getSingle(this.stateParams.id);

  }
}

export default CollaboratorIndController;
