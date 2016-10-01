import collaboratorsService from '../../services/collaborators.service';

class CollaboratorsController {
  constructor(collaboratorsService) {
    this.collaboratorsService = collaboratorsService;
    this.collaborators = collaboratorsService.collaborators;
  }
}

export default CollaboratorsController;
