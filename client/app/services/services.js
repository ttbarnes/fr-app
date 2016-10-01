import angular from 'angular';
import albumsService from './albums.service';
import collaboratorsService from './collaborators.service';
import emailService from './email.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    collaboratorsService,
    emailService
  })