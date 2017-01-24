import newsService from './news.service';

describe('newsService', () => {

  var MockNewsService;

  beforeEach(() => {
    MockNewsService = new newsService();
  });

  describe('news', () => {

    it('should be defined', () => {
      MockCollaboratorsService.news = [ {}, {} ];
      expect(MockCollaboratorsService.news).toBeDefined();
    });

  });

});
