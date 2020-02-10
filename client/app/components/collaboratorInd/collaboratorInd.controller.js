class CollaboratorIndController {
  constructor($state, $stateParams, collaboratorsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id;
    this.collaboratorsService = collaboratorsService;
    this.promiseError = false;

    const collaboratorsFetched = (collaboratorsService.collaborators.length &&
                                  collaboratorsService.collaborators.length > 0);
    if (!collaboratorsFetched) {
      this.promiseLoading = true;

      this.collaboratorsService.getAll().then((data) => {
        this.promiseLoading = false;
        this.data = data;
        this.collab = this.data.find((c) => c.urlName === $stateParams.id);

        this.collabState = {
          detail: this.collaboratorsService.getPrevNextCollab(this.currentId)
        };

      }, () => {
        this.promiseLoading = false;
        this.promiseError = true;
      }).catch((err) => {
        this.promiseLoading = false;
        this.promiseError = true;
      });

    } else {
      this.collab = collaboratorsService.collaborators.find((c) => c.urlName === $stateParams.id);
      this.collabState = {
        detail: this.collaboratorsService.getPrevNextCollab(this.currentId)
      };
    }
  }
}

export default CollaboratorIndController;
