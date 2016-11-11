import albumsService from '../../services/albums.service';
import HomeModule from './home'
import HomeController from './home.controller';
import HomeComponent from './home.component';
import HomeTemplate from './home.html';

describe('Home', ()=>{
  let $rootScope,
      makeController

  var albumsService,
      mockAlbumsService = {
        allAlbums: [{id:1}, {id:2}]
      };

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    albumsService = mockAlbumsService
    makeController = ()=>{
      return new HomeController(albumsService);
    };
  }));

  describe('Controller', () => {

    it('should inject albumsService', () => {
      let controller = makeController()
      expect(controller.albumsService).toBeDefined();
      expect(controller.albumsService).toEqual(mockAlbumsService)
    });

    it('should assign latestAlbum to scope', () => {
      let controller = makeController()
      expect(controller.latestAlbum).toBeDefined();
      expect(controller.latestAlbum).toBeDefined();
      expect(controller.latestAlbum).toEqual(jasmine.any(Object));
    });

  });

  describe('Component', ()=>{

    let component = HomeComponent;

    it('should use the right template',()=>{
      expect(component.template).toEqual(HomeTemplate);
    });

    it('should use controllerAs', ()=>{
      expect(component.controllerAs).toBeDefined();
    });

    it('should use the right controller', () => {
      expect(component.controller).toEqual(HomeController);
    });

  });

});
