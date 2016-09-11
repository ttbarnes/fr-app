import img1 from '../../../images/gallery/1.jpg';
import img2 from '../../../images/gallery/2.jpg';
import img3 from '../../../images/gallery/3.jpg';
import img4 from '../../../images/gallery/4.jpg';


class GalleryController {
  constructor(Lightbox) {
    'ngInject';
    this.Lightbox = Lightbox;

    this.images = [
      { url: img1 },
      { url: img2 },
      { url: img3 },
      { url: img4 }
    ];

    this.opts = {
      index: 0
    };

  }

  openLightboxModal(i) {
    this.Lightbox.openModal(this.images, i);
  }

}

export default GalleryController;
