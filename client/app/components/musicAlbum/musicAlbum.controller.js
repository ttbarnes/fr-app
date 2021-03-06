import albumsService from '../../services/albums.service';

class MusicAlbumController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 3;
    this.albumsService = albumsService;

    this.album = this.albumsService.getAlbumById(this.currentId);

    this.otherAlbums = this.albumsService.getAllOtherAlbums(this.currentId);

    if (!this.album) {
      $state.go('error');
    }

  }
}

export default MusicAlbumController;
