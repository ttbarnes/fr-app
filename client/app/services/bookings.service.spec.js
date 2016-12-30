import bookingsService from './bookings.service';

describe('bookingsService', () => {

  var MockBookingsService,
      MockGetAll = () => {
        return [
          { 'title': 'test', 'venue': 'somewhere' },
          { 'title': 'test 2', 'venue': 'somewhere else' }
        ];
      };

  beforeEach(() => {
    MockBookingsService = new bookingsService();
  });

  describe('getAll', () => {

    it('should be defined', () => {
      expect(MockBookingsService.getAll).toBeDefined();
    });

  });

  describe('getAll', () => {

    it('should be defined', () => {
      MockBookingsService.getAll = MockGetAll;
      expect(MockBookingsService.getAll).toBeDefined();
      expect(MockBookingsService.getAll).toEqual(jasmine.any(Function));
    });

    it('should be a function', () => {
      MockBookingsService.getAll = MockGetAll;
      expect(MockBookingsService.getAll).toEqual(jasmine.any(Function));
    });

    it('should return an array of bookings', () => {
      MockBookingsService.getAll = MockGetAll;
      const result = MockBookingsService.getAll();
      expect(result).toEqual(jasmine.any(Array));
    });

  });

});
