import MusicAlbumPhysicalModule from './musicAlbumPhysical'
import MusicAlbumPhysicalController from './musicAlbumPhysical.controller';
import MusicAlbumPhysicalComponent from './musicAlbumPhysical.component';
import MusicAlbumPhysicalTemplate from './musicAlbumPhysical.html';

describe('MusicAlbumPhysical', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MusicAlbumPhysicalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MusicAlbumPhysicalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MusicAlbumPhysicalTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MusicAlbumPhysicalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MusicAlbumPhysicalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MusicAlbumPhysicalController);
      });
  });
});
