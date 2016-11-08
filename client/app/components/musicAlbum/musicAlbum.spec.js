// import albumsService from '../../services/albums.service';
import MusicAlbumModule from './musicAlbum'
import MusicAlbumController from './musicAlbum.controller';
import MusicAlbumComponent from './musicAlbum.component';
import MusicAlbumTemplate from './musicAlbum.html';

describe('MusicAlbum', () => {
  let $rootScope,
      makeController

  beforeEach(window.module(MusicAlbumModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    // albumsService = mockAlbumsService
    makeController = () => {
      // return new MusicAlbumController(albumsService);
      return new MusicAlbumController();
    };
  }));

  describe('Controller', () => {

    // it('should inject albumsService', () => {
    //   let controller = makeController()
    //   expect(controller.albumsService).toBeDefined();
    //   expect(controller.albumsService).toEqual(mockAlbumsService)
    // });

  });

  describe('Component', () => {

    let component = MusicAlbumComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(MusicAlbumTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MusicAlbumController);
    });

  });

});
