class NewsIndController {
  constructor($state, $stateParams, newsService) {
    'ngInject';
    this.newsService = newsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id;

    this.data = this.newsService.getSingle(this.currentId);
    if(!this.data) {
      $state.go('error');
    }

  }
}

export default NewsIndController;
