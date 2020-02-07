import collaboratorsService from '../../services/collaborators.service';

class CollaboratorsController {
  constructor(collaboratorsService) {
    'ngInject';
    this.collaboratorsService = collaboratorsService;
    this.collaborators = collaboratorsService.collaborators;
    this.promiseError = false;

    const collaboratorsFetched = (collaboratorsService.collaborators.length &&
                                  collaboratorsService.collaborators.length > 0);

    console.log('COLLABS CTRL - collaboratorsFetched?  ', collaboratorsFetched);
    console.log('COLLABS CTRL - collaboratorsService.collaborators ', collaboratorsService.collaborators);
    if (!collaboratorsFetched) {
      this.promiseLoading = true;

      this.collaboratorsService.getAll().then((data) => {
        this.promiseLoading = false;
        this.data = data;
      }, () => {
        this.promiseLoading = false;
        this.promiseError = true;
      }).catch((err) => {
        this.promiseLoading = false;
        this.promiseError = true;
      });
    } else {
      this.data = collaboratorsService.collaborators;
    }

  }
}

export default CollaboratorsController;
