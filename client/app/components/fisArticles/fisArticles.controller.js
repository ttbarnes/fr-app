import fisArticlesService from '../../services/fisArticles.service';
import collaboratorsService from '../../services/collaborators.service';

class FisArticlesController {
  constructor(fisArticlesService) {
    'ngInject';
    this.fisArticlesService = fisArticlesService;
    this.data = fisArticlesService.data;
  }

}

export default FisArticlesController;
