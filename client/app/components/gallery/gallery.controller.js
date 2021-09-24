import { PAGE_TITLE_GALLERY } from '../../constants/constants';

class GalleryController {
  constructor(galleryService, $rootScope, Lightbox) {
    'ngInject';
    this.galleryService = galleryService;
    this.rootScope = $rootScope;
    this.Lightbox = Lightbox;

    this.rootScope.ogTitle = PAGE_TITLE_GALLERY;

    this.images = this.galleryService.allImages;

    this.openLightboxModal = (i) => this.Lightbox.openModal(this.images, i);

  }

}

export default GalleryController;
