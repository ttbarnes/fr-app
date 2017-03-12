import newsService from '../../services/news.service';

class NewsController {
  constructor(newsService, $sce) {
    'ngInject';
    this.newsService = newsService;
    this.$sce = $sce;
    this.data = this.newsService.data;
    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);
  }
}

export default NewsController;
