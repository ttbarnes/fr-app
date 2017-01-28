import NewsModule from './news'
import NewsController from './news.controller';
import NewsComponent from './news.component';
import NewsTemplate from './news.html';

describe('News', () => {
  let $rootScope,
      makeController,
      newsService,
      mockNewsService = {
        data: [
          { title: 'test title' },
          { title: 'dummy title' },
        ]
      };

  beforeEach(window.module(NewsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    newsService = mockNewsService;
    makeController = () => {
      return new NewsController(newsService);
    };
  }));

  describe('Controller', () => {

    it('should inject newsService', () => {
      let controller = makeController();
      expect(controller.newsService).toBeDefined();
      expect(controller.newsService).toEqual(mockNewsService)
    });

    it('should assign data to scope ', () => {
      let controller = makeController();
      expect(controller.data).toBeDefined();
      expect(controller.data).toEqual(jasmine.any(Array));
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
