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
      };

  beforeEach(window.module(DiscographyModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    albumsService = mockAlbumsService
    makeController = () => {
      return new DiscographyController(albumsService);
    };
  }));

  describe('Controller', () => {

    it('should inject albumsService', () => {
      let controller = makeController()
      expect(controller.albumsService).toBeDefined();
      expect(controller.albumsService).toEqual(mockAlbumsService)
    });

    it('assigns albumsService.allAlbums to \'albums\'', () => {
      let controller = makeController()
      expect(controller.albums).toBeDefined();
      expect(controller.albums).toEqual(mockAlbumsService.allAlbums)
    });

  });

  describe('Component', () => {

    let component = DiscographyComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(DiscographyTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(DiscographyController);
    });

  });

});
