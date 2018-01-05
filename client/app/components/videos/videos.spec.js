import VideosModule from './videos'
import VideosController from './videos.controller';
import VideosComponent from './videos.component';
import VideosTemplate from './videos.html';

describe('Videos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideosModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideosController();
    };
  }));

  describe('Component', () => {
      // component/directive specs
      let component = VideosComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(VideosTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(VideosController);
      });
  });
});
