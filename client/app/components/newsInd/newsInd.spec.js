import NewsIndModule from './newsInd'
import NewsIndController from './newsInd.controller';
import NewsIndComponent from './newsInd.component';
import NewsIndTemplate from './newsInd.html';
import Services from '../../services/services.js';
import NewsService from '../../services/news.service.js';

describe('NewsInd', () => {
  let $rootScope,
      makeController,
      $state,
      $stateParams,
      newsService,
      mockNewsService = {
        getSingle: () => {
          return [
            { title: 'hello world'},
            { title: 'dummy title'}
          ]
        }
      },
      mockStateParams = {
        title: 'test-title-url-hello-world'
      };

  beforeEach(() => {
    window.module(Services.name);
    window.module(NewsIndModule.name);
  });
  beforeEach(inject((_$rootScope_, _$state_, newsService) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = mockStateParams;
    newsService = mockNewsService;
    makeController = () => {
      return new NewsIndController($state, $stateParams, newsService);
    };
  }));

  describe('Controller', () => {

    it('should inject news service', () => {
      let controller = makeController(newsService);
      expect(controller.newsService).toBeDefined();
    });

    it('should assign indTitle to scope', () => {
      let controller = makeController(newsService);
      expect(controller.indTitle).toBeDefined();
      expect(controller.indTitle).toEqual(controller.stateParams.title);
    });

    it('should have data in scope', () => {
      let controller = makeController(newsService);
      expect(controller.data).toBeDefined();
      expect(controller.data).toEqual(controller.newsService.getSingle());
    });

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
