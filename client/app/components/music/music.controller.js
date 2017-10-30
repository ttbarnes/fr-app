import albumsService from '../../services/albums.service';

class MusicController {
  constructor(albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.albums = albumsService.allAlbums;
    this.releasedAlbums = [];
    if (this.albums[0].id === 3) {
      this.releasedAlbums = [this.albums[1], this.albums[2]]
    }
  }
}

export default MusicController;
