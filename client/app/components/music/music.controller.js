import albumsService from '../../services/albums.service';

class MusicController {
  constructor(albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.releasedAlbums = this.albumsService.getAllReleasedAlbums();
  }
}

export default MusicController;
