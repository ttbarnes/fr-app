class CollaboratorIndController {
  constructor($state, $stateParams, collaboratorsService) {
    'ngInject';
    this.stateParams = $stateParams;
    const currentId = this.stateParams.id;
    this.collaboratorsService = collaboratorsService;

    this.collab = this.collaboratorsService.getSingle(currentId);
    if(!this.collab) {
      $state.go('error');
    }

    this.collabState = {
      detail: this.collaboratorsService.getPrevNextCollab(currentId),
      onLast: this.collaboratorsService.isLastCollaborator(currentId)
    };

  }
}

export default CollaboratorIndController;
