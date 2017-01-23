import NewsModule from './news'
import NewsController from './news.controller';
import NewsComponent from './news.component';
import NewsTemplate from './news.html';

describe('News', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsController();
    };
  }));

  describe('Controller', () => {

  });

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(NewsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = NewsComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(NewsTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(NewsController);
    });
  });
});
