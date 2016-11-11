import AlbumModule from './album'
import AlbumController from './album.controller';
import AlbumComponent from './album.component';
import AlbumTemplate from './album.html';

describe('Album', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AlbumModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AlbumController();
    };
  }));

  describe('Controller', () => {

  });


  describe('Component', () => {
      let component = AlbumComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(AlbumTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(AlbumController);
      });
  });
});
