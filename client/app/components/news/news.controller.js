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
      this.data = data;
    }, () => {
      this.promiseError = true;
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

    this.openLightboxModal = (images, i) => this.Lightbox.openModal(images, i);

    this.articleSectionsHaveOnlyOneImage = (sections) => {
      let images = [];
      sections.forEach((section) => {
        if (section.images.length) {
          const filteredSectionImages = section.images.filter(i => i.url && i.url.length);
          filteredSectionImages.forEach((imageObj) => {
            images.push(imageObj.url);
          });
        }
      });
      if (images.length === 1) {
        return true;
      }
      return false;
    }

  }
}

export default NewsController;
