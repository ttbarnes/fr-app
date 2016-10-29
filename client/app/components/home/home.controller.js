import albumsService from '../../services/albums.service';

class HomeController {
  constructor(albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.latestAlbum = albumsService.allAlbums[0];
  }
}

export default HomeController;
