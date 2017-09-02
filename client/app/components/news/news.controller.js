import newsService from '../../services/news.service';

const dateIsBefore = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt)
};

class NewsController {
  constructor(newsService, $sce, Lightbox) {
    'ngInject';
    this.newsService = newsService;
    this.$sce = $sce;
    this.Lightbox = Lightbox;
    this.promiseError = false;

    this.newsService.getAll().then((data) => {
      const dataReversed = data.data.slice().reverse();
      let orderedData = dataReversed.sort(dateIsBefore);
      this.data = orderedData;
    }, () => {
      this.promiseError = true;
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

    this.openLightboxModal = (images, i) => this.Lightbox.openModal(images, i);

  }
}

export default NewsController;
