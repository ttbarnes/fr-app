import angular from 'angular';
import albumsService from './albums.service';
import bookingsService from './bookings.service';
import galleryService from './gallery.service';
import collaboratorsService from './collaborators.service';
import techService from './tech.service';
import emailService from './email.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    bookingsService,
    galleryService,
    collaboratorsService,
    techService,
    emailService
  })