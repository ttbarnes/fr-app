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
      }

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    albumsService = mockAlbumsService
    makeController = ()=>{
      return new HomeController(albumsService);
    };
  }));

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

  })

  describe('Component', ()=>{

    let component = HomeComponent;

    it('should use the right template',()=>{
      expect(component.template).to.equal(HomeTemplate);
    });

    it('should use controllerAs', ()=>{
      expect(component).to.have.property('controllerAs');
    });

    it('should use the right controller', ()=>{
      expect(component.controller).to.equal(HomeController);
    });

  });

})


