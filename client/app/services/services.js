import angular from 'angular';
import albumsService from './albums.service';
import galleryService from './gallery.service';
import collaboratorsService from './collaborators.service';
import newsService from './news.service';
import techService from './tech.service';
import emailService from './email.service';
import fisArticlesService from './fisArticles.service';

export default angular
  .module('app.services', [])
  .service({
    albumsService,
    galleryService,
    collaboratorsService,
    newsService,
    techService,
    emailService,
    fisArticlesService
  })
