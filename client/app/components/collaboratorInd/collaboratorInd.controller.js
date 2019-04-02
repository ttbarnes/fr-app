class CollaboratorIndController {
  constructor($state, $stateParams, collaboratorsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.collabId;
    this.collaboratorsService = collaboratorsService;

    this.collab = this.collaboratorsService.getSingle(this.currentId);
    if(!this.collab) {
      $state.go('error');
    }

    this.collabState = {
      detail: this.collaboratorsService.getPrevNextCollab(this.currentId),
      onLast: this.collaboratorsService.isLastCollaborator(this.currentId)
    };

  }
}

export default CollaboratorIndController;
