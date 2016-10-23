import albumsService from '../../services/albums.service';

class MusicController {
  constructor(albumsService) {
    'ngInject';
    this.albumsService = albumsService
    this.albums = albumsService.allAlbums
  }
}

export default MusicController;
