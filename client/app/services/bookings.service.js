import bookings from '../data/bookings.json';

export default class bookingsService {

  constructor(){

    this.bookings = bookings;

    /*
    // get all bookings
    */
    this.getAll = () => {
      return this.bookings;
    }

  }

}