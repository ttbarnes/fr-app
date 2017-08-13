import MusicAlbumAudioCdModule from './musicAlbumAudioCd'
import MusicAlbumAudioCdController from './musicAlbumAudioCd.controller';
import MusicAlbumAudioCdComponent from './musicAlbumAudioCd.component';
import MusicAlbumAudioCdTemplate from './musicAlbumAudioCd.html';

describe('MusicAlbumAudioCd', () => {
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

  beforeEach(window.module(MusicAlbumAudioCdModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = mockStateParams;
    albumsService = mockAlbumsService;
    makeController = ()=>{
      return new MusicAlbumAudioCdController($state, $stateParams, albumsService);
    };
  }));

  // todo: fix me

  // describe('Controller', () => {
  //   it('should inject albumsService', () => {
  //     let controller = makeController(albumsService);
  //     expect(controller.albumsService).toBeDefined();
  //     expect(controller.albumsService).toEqual(mockAlbumsService)
  //   });

  //   it('should assign an album to scope', () => {
  //     let controller = makeController(albumsService);
  //     expect(controller.album).toBeDefined();
  //     expect(controller.album).toEqual(jasmine.any(Object));
  //   });

  // });

  describe('Component', () => {
    let component = MusicAlbumAudioCdComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(MusicAlbumAudioCdTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MusicAlbumAudioCdController);
    });
  });
});
