import articlesService from '../../services/articles.service';
import collaboratorsService from '../../services/collaborators.service';

class ArticlesController {
  constructor(articlesService) {
    'ngInject';
    this.articlesService = articlesService;
    this.data = articlesService.data;
  }

}

export default ArticlesController;
