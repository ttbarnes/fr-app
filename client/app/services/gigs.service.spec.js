import gigsService from './gigs.service';

describe('gigsService', () => {

  var MockGigsService,
      MockGetAll = () => {
        return [
          { 'title': 'test', 'venue': 'somewhere' },
          { 'title': 'test 2', 'venue': 'somewhere else' }
        ];
      };

  beforeEach(() => {
    MockGigsService = new gigsService();
  });

  describe('getAll', () => {

    it('should be defined', () => {
      expect(MockGigsService.getAll).toBeDefined();
    });

  });

  describe('getAll', () => {

    it('should be defined', () => {
      MockGigsService.getAll = MockGetAll;
      expect(MockGigsService.getAll).toBeDefined();
      expect(MockGigsService.getAll).toEqual(jasmine.any(Function));
    });

    it('should be a function', () => {
      MockGigsService.getAll = MockGetAll;
      expect(MockGigsService.getAll).toEqual(jasmine.any(Function));
    });

    it('should return an array of gigs', () => {
      MockGigsService.getAll = MockGetAll;
      const result = MockGigsService.getAll();
      expect(result).toEqual(jasmine.any(Array));
    });

  });

});
