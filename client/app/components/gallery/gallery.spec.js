import GalleryModule from './gallery'
import GalleryController from './gallery.controller';
import GalleryComponent from './gallery.component';
import GalleryTemplate from './gallery.html';

describe('Gallery', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GalleryModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GalleryController();
    };
  }));

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
