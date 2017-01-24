import NewsIndModule from './NewsInd'
import NewsIndController from './NewsInd.controller';
import NewsIndComponent from './NewsInd.component';
import NewsIndTemplate from './NewsInd.html';

describe('NewsInd', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsIndModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsIndController();
    };
  }));

  describe('Controller', () => {

  });

  describe('Component', () => {
    let component = NewsIndComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(NewsIndTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(NewsIndController);
    });
  });
});
