import albumsService from '../../services/albums.service';
import { PAGE_TITLE_MUSIC_ALBUM } from '../../constants/constants';

class MusicAlbumController {
  constructor($state, $stateParams, $rootScope, albumsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 3;
    this.rootScope = $rootScope;
    this.albumsService = albumsService;

    this.album = this.albumsService.getAlbumById(this.currentId);

    this.otherAlbums = this.albumsService.getAllOtherAlbums(this.currentId);

    if (!this.album) {
      $state.go('error');
    }

    this.rootScope.ogTitle = this.album.name + PAGE_TITLE_MUSIC_ALBUM;

    if (this.album.albumCredits && this.album.albumCredits[0]) {
      this.rootScope.ogDescription = this.album.albumCredits[0];
    }
  }
}

export default MusicAlbumController;
