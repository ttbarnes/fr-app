import collaboratorsService from '../../services/collaborators.service';
import { PAGE_TITLE_COLLABORATORS } from '../../constants/constants';

class CollaboratorsController {
  constructor(collaboratorsService, $rootScope) {
    'ngInject';
    this.collaboratorsService = collaboratorsService;
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_COLLABORATORS;

    this.collaborators = collaboratorsService.collaborators;
    this.promiseError = false;

    const collaboratorsFetched = (collaboratorsService.collaborators.length &&
                                  collaboratorsService.collaborators.length > 0);

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
