class GalleryController {
  constructor(galleryService, Lightbox) {
    'ngInject';
    this.galleryService = galleryService;
    this.Lightbox = Lightbox;

    this.images = this.galleryService.allImages;

  }

  openLightboxModal(i) {
    this.Lightbox.openModal(this.images, i);
  }

}

export default GalleryController;
