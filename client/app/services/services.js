import angular from 'angular';
import albumsService from './albums.service';
import emailService from './email.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    emailService
  })