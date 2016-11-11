// import albumsService from '../../services/albums.service';
import MusicAlbumModule from './musicAlbum'
import MusicAlbumController from './musicAlbum.controller';
import MusicAlbumComponent from './musicAlbum.component';
import MusicAlbumTemplate from './musicAlbum.html';

describe('MusicAlbum', () => {
  let $rootScope,
      $state,
      makeController,
      $stateParams,
      albumsService,
      mockAlbumsService = {
        getSingleAlbum: () => {
          return {
            title: 'test album',
            id: 1
          }
        }
      },
      mockStateParams = {
        id: 1
      };

  beforeEach(window.module(MusicAlbumModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = mockStateParams;
    albumsService = mockAlbumsService;
    makeController = ()=>{
      return new MusicAlbumController($state, $stateParams, albumsService);
    };
  }));

  describe('Controller', () => {

    it('should inject albumsService', () => {
      let controller = makeController();
      expect(controller.albumsService).toBeDefined();
      expect(controller.albumsService).toEqual(mockAlbumsService)
    });

    it('should assign an album to scope ', () => {
      let controller = makeController();
      expect(controller.album).toBeDefined();
      expect(controller.album).toEqual(jasmine.any(Object));
    });

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
