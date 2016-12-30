class BookingsController {
  constructor(bookingsService) {
    'ngInject';
    this.bookingsService = bookingsService;

    this.bookings = this.bookingsService.getAll();
    console.log('YO: ', this.bookings);

  }
}

export default BookingsController;
