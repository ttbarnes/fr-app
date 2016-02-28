import albumsService from '../../services/albums.service';

class HomeController {
  constructor(albumsService) {
    "ngInject"
    this.albumsService = albumsService
    this.albums = albumsService.allAlbums
  }
}

export default HomeController;
