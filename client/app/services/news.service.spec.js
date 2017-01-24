import newsService from './news.service';

describe('newsService', () => {

  var mockNewsService;

  describe('news', () => {

    it('should be defined', () => {
      newsService.news = [ {}, {} ];
      expect(newsService.news).toBeDefined();
    });

  });

});
