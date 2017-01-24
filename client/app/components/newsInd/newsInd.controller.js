class NewsIndController {
  constructor($state, $stateParams, newsService) {
    'ngInject';
    this.newsService = newsService;
    this.stateParams = $stateParams;
    this.indTitle = this.stateParams.title;

    this.data = this.newsService.getSingle(this.indTitle);
    if(!this.data) {
      $state.go('error');
    }

  }
}

export default NewsIndController;
