import MusicAlbumReviewsModule from './musicAlbumReviews'
import MusicAlbumReviewsController from './musicAlbumReviews.controller';
import MusicAlbumReviewsComponent from './musicAlbumReviews.component';
import MusicAlbumReviewsTemplate from './musicAlbumReviews.html';

describe('MusicAlbumReviews', () => {
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
      return new MusicAlbumReviewsController($state, $stateParams, albumsService);
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

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(MusicAlbumReviewsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = MusicAlbumReviewsComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(MusicAlbumReviewsTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MusicAlbumReviewsController);
    });
  });
});
