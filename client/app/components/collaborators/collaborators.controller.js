import collaboratorsService from '../../services/collaborators.service';

class CollaboratorsController {
  constructor(collaboratorsService) {
    'ngInject';
    this.collaboratorsService = collaboratorsService;
    this.collaborators = collaboratorsService.collaborators;

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

  }
}

export default CollaboratorsController;
