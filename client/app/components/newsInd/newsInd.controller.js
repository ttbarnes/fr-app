class NewsIndController {
  constructor($state, $stateParams, newsService, $sce) {
    'ngInject';
    this.newsService = newsService;
    this.$sce = $sce;
    this.stateParams = $stateParams;
    this.indTitle = this.stateParams.title;

    this.data = this.newsService.getSingle(this.indTitle);
    if(!this.data) {
      $state.go('error');
    }

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

  }
}

export default NewsIndController;
