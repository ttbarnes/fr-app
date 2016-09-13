import img1 from '../../../images/gallery/1.jpg';
import img2 from '../../../images/gallery/2.jpg';
import img3 from '../../../images/gallery/3.jpg';
import img4 from '../../../images/gallery/4.jpg';
import img5 from '../../../images/gallery/5.jpg';
import img6 from '../../../images/gallery/6.jpg';
import img7 from '../../../images/gallery/7.jpg';
import img8 from '../../../images/gallery/8.jpg';
import img9 from '../../../images/gallery/9.jpg';
import img10 from '../../../images/gallery/10.jpg';
import img11 from '../../../images/gallery/11.jpg';
import img12 from '../../../images/gallery/12.jpg';
import img13 from '../../../images/gallery/13.jpg';
import img14 from '../../../images/gallery/14.jpg';

class GalleryController {
  constructor(Lightbox) {
    'ngInject';
    this.Lightbox = Lightbox;

    this.images = [
      { url: img1 },
      { url: img2, caption: 'Testing caption' },
      { url: img3 },
      { url: img4, caption: 'Testing caption' },
      { url: img5 },
      { url: img6 },
      { url: img7, caption: 'Testing caption' },
      { url: img8 },
      { url: img9 },
      { url: img10, caption: 'Testing caption' },
      { url: img11 },
      { url: img12 },
      { url: img13, caption: 'Testing caption' },
      { url: img14 }
    ];

  }

  openLightboxModal(i) {
    this.Lightbox.openModal(this.images, i);
  }

}

export default GalleryController;
