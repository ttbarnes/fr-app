import albumsService from '../../services/albums.service';
import DiscographyModule from './discography'
import DiscographyController from './discography.controller';
import DiscographyComponent from './discography.component';
import DiscographyTemplate from './discography.html';

describe('Discography', () => {
  let $rootScope,
      makeController

  var albumsService,
      mockAlbumsService = {
        allAlbums: [{id:1}, {id:2}]
      }

  beforeEach(window.module(DiscographyModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    albumsService = mockAlbumsService
    makeController = () => {
      return new DiscographyController(albumsService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    it('injects albumsService', () => {
      let controller = makeController()
      expect(controller.albumsService).to.exist
      expect(controller.albumsService).to.equal(mockAlbumsService)
    })

    it('assigns albumsService.allAlbums to \'albums\'', () => {
      let controller = makeController()
      expect(controller.albums).to.exist
      expect(controller.albums).to.be.an('array')
      expect(controller.albums).to.equal(mockAlbumsService.allAlbums)
    })

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DiscographyTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DiscographyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DiscographyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DiscographyController);
      });
  });
});
