import albumsService from '../../services/albums.service';
import MusicModule from './music'
import MusicController from './music.controller';
import MusicComponent from './music.component';
import MusicTemplate from './music.html';

describe('Music', () => {
  let $rootScope,
      makeController

  var albumsService,
      mockAlbumsService = {
        allAlbums: [{id:1}, {id:2}]
      };

  beforeEach(window.module(MusicModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    albumsService = mockAlbumsService
    makeController = () => {
      return new MusicController(albumsService);
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

    let component = MusicComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(MusicTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MusicController);
    });

  });

});
