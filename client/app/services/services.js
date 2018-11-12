import angular from 'angular';
import albumsService from './albums.service';
import gigsService from './gigs.service';
import galleryService from './gallery.service';
import collaboratorsService from './collaborators.service';
import newsService from './news.service';
import techService from './tech.service';
import emailService from './email.service';
import journalismService from './journalism.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    gigsService,
    galleryService,
    collaboratorsService,
    newsService,
    techService,
    emailService,
    journalismService
  })
