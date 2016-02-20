import albumsService from '../../services/albums.service';

class DiscographyController {
  constructor(albumsService) {
    "ngInject"
    this.albumsService = albumsService
    this.albums = albumsService.allAlbums
  }
}

export default DiscographyController;
