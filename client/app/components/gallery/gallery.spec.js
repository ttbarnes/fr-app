import GalleryModule from './gallery'
import GalleryController from './gallery.controller';
import GalleryComponent from './gallery.component';
import GalleryTemplate from './gallery.html';
import Services from '../../services/services.js';
import GalleryService from '../../services/gallery.service.js';
import modal from 'angular-ui-bootstrap';
import pageslide from 'angular-pageslide-directive';
import bootstrapLightbox from 'angular-bootstrap-lightbox';

describe('Gallery', () => {
  let $rootScope,
      lightbox,
      makeController,
      mockOpenLightBoxIndex = 3,
      galleryService,
      mockGalleryService = {
        allImages : [
          { url: "images/something.png", thumbUrl: "images/thumb.png" },
          { url: "images/something2.png", thumbUrl: "images/thumb2.png" },
          { url: "images/something3.png", thumbUrl: "images/thumb3.png" }
        ]
      },
      mockLightbox = {
        openModal: () => {}
      };

  beforeEach(() => {
    window.module(Services.name);
    window.module(GalleryModule.name);
    window.module('ui.bootstrap.modal');
    window.module('bootstrapLightbox');
  });
  beforeEach(inject((_$rootScope_, galleryService) => {
    $rootScope = _$rootScope_;
    galleryService = mockGalleryService;
    lightbox = mockLightbox;
    makeController = () => {
      return new GalleryController(mockGalleryService, mockLightbox);
    };
  }));

  describe('Controller', () => {

    it('should inject Lightbox', () => {
      let controller = makeController(galleryService, lightbox);
      expect(controller.Lightbox).toBeDefined();
    });

    it('should have images array', () => {
      let controller = makeController(galleryService);
      expect(controller.images).toBeDefined();
      expect(controller.images).toEqual(jasmine.any(Array));
    });

    it('should have images objects', () => {
      let controller = makeController(galleryService);
      expect(controller.images[0]).toBeDefined();
      expect(controller.images[0]).toEqual(jasmine.any(Object));
      expect(controller.images[0].url).toBeDefined();
      expect(controller.images[1]).toBeDefined();
      expect(controller.images[1].url).toBeDefined();
      expect(controller.images[1]).toEqual(jasmine.any(Object));
      expect(controller.images[2]).toBeDefined();
      expect(controller.images[2].url).toBeDefined();
      expect(controller.images[2]).toEqual(jasmine.any(Object));
    });

    describe('openLightboxModal', () => {

      it('should be defined', () => {
        let controller = makeController(galleryService, lightbox);
        expect(controller.openLightboxModal).toBeDefined();
        expect(controller.openLightboxModal).toEqual(jasmine.any(Function));
      });

      it('should be called successfully', () => {
        let controller = makeController(galleryService, lightbox);
        spyOn(controller, 'openLightboxModal').and.callThrough();
        controller.openLightboxModal();
        expect(controller.openLightboxModal).toHaveBeenCalled();
      });

      it('should be called successfully with an index', () => {
        let controller = makeController(galleryService, lightbox);
        spyOn(controller, 'openLightboxModal').and.callThrough();
        controller.openLightboxModal(mockOpenLightBoxIndex);
        expect(controller.openLightboxModal).toHaveBeenCalledWith(mockOpenLightBoxIndex);
      });

      it('should call lightbox.openModal', () => {
        let controller = makeController(galleryService);
        spyOn(controller, 'openLightboxModal').and.callThrough();
        spyOn(controller.Lightbox, 'openModal').and.callThrough();
        controller.openLightboxModal(mockOpenLightBoxIndex);
        expect(controller.Lightbox.openModal).toHaveBeenCalled();
      });

      it('should call lightbox.openModal with images in scope', () => {
        let controller = makeController(galleryService);
        spyOn(controller, 'openLightboxModal').and.callThrough();
        spyOn(controller.Lightbox, 'openModal').and.callThrough();
        controller.openLightboxModal(mockOpenLightBoxIndex);
        expect(controller.Lightbox.openModal).toHaveBeenCalled();
        expect(controller.Lightbox.openModal).toHaveBeenCalledWith(controller.images, mockOpenLightBoxIndex);
      });

    });

  });

  describe('Component', () => {

    let component = GalleryComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(GalleryTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(GalleryController);
    });

  });

});
