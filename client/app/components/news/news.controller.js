import newsService from '../../services/news.service';

class NewsController {
  constructor(newsService) {
    'ngInject';
    this.newsService = newsService;
    this.data = this.newsService.data;
  }
}

export default NewsController;
