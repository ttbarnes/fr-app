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
    this.promiseLoading = true;

    this.newsService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data;
    }, () => {
      this.promiseLoading = false;
      this.promiseError = true;
    }).catch((err) => {
      this.promiseLoading = false;
      this.promiseError = true;
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

    this.openLightboxModal = (images, i) => this.Lightbox.openModal(images, i);

    this.articleHasMultipleSectionsWithSingleImage = (sections) => {
      let singleImageSections = [];

      sections.forEach((section) => {
        if (section.images.length) {
          const filteredSectionImages = section.images.filter(i => i.url && i.url.length);
          if (filteredSectionImages.length === 1) {
            singleImageSections.push(filteredSectionImages);
          }
        }
      });

      if (singleImageSections.length > 1) {
        return true;
      } else {
        return false;
      }
    };

  }
}

export default NewsController;
