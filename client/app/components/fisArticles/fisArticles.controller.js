import fisArticlesService from '../../services/fisArticles.service';

class FisArticlesController {
  constructor(fisArticlesService) {

    'ngInject';
    this.fisArticlesService = fisArticlesService;
    this.data = this.fisArticlesService.data;
    
  }

}

export default FisArticlesController;
