import MusicAlbumPressModule from './musicAlbumPress'
import MusicAlbumPressController from './musicAlbumPress.controller';
import MusicAlbumPressComponent from './musicAlbumPress.component';
import MusicAlbumPressTemplate from './musicAlbumPress.html';

describe('MusicAlbumPress', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MusicAlbumPressModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MusicAlbumPressController();
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
      expect(MusicAlbumPressTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MusicAlbumPressComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MusicAlbumPressTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MusicAlbumPressController);
      });
  });
});
