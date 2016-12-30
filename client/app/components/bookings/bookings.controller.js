import * as CONST from '../../constants/constants';

class BookingsController {
  constructor(bookingsService) {
    'ngInject';
    this.bookingsService = bookingsService;
    this.defaultThumb = CONST.BOOKINGS_DEFAULT_THUMB;


    this.bookings = this.bookingsService.getAll();

  }
}

export default BookingsController;
