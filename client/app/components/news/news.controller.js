import newsService from '../../services/news.service';

class NewsController {
  constructor(newsService, $sce, Lightbox) {
    'ngInject';
    this.newsService = newsService;
    this.$sce = $sce;
    this.Lightbox = Lightbox;

    this.newsService.getAll().then((data) => {
      let orderedData = data.data.slice().reverse();
      this.data = orderedData;
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

    this.openLightboxModal = (images, i) => this.Lightbox.openModal(images, i);
    
  }
}

export default NewsController;
