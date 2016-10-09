import angular from 'angular';
import albumsService from './albums.service';
import galleryService from './gallery.service';
import collaboratorsService from './collaborators.service';
import emailService from './email.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    galleryService,
    collaboratorsService,
    emailService
  })