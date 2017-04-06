import MusicAlbumPhysicalModule from './musicAlbumPhysical'
import MusicAlbumPhysicalController from './musicAlbumPhysical.controller';
import MusicAlbumPhysicalComponent from './musicAlbumPhysical.component';
import MusicAlbumPhysicalTemplate from './musicAlbumPhysical.html';

describe('MusicAlbumPhysical', () => {
  let $rootScope,
      $state,
      makeController,
      $stateParams,
      albumsService,
      mockAlbumsService = {
        getSingleAlbum: () => {
          return {
            title: 'test album',
            id: 1,
            canOrderPhysicalCopy: true
          }
        }
      },
      mockStateParams = {
        id: 1
      };

  beforeEach(window.module(MusicAlbumPhysicalModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = mockStateParams;
    albumsService = mockAlbumsService;
    makeController = ()=>{
      return new MusicAlbumPhysicalController($state, $stateParams, albumsService);
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
    let component = MusicAlbumPhysicalComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(MusicAlbumPhysicalTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MusicAlbumPhysicalController);
    });
  });
});
