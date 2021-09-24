import albumsService from '../../services/albums.service';
import { PAGE_TITLE_MUSIC } from '../../constants/constants';

class MusicController {
  constructor(albumsService, $rootScope) {
    'ngInject';
    this.albumsService = albumsService;
    this.albums = this.albumsService.allAlbums;
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_MUSIC;
  }
}

export default MusicController;
