class NewsIndController {
  constructor($state, $stateParams, newsService, $sce) {
    'ngInject';
    this.newsService = newsService;
    this.$sce = $sce;
    this.stateParams = $stateParams;
    this.indTitle = this.stateParams.title;

    this.newsService.getSingle(this.indTitle).then((data) => {
      if (!data.length) {
        $state.go('error');
      }
      this.post = data[0];
    }, () => {
      $state.go('error');
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

  }
}

export default NewsIndController;
