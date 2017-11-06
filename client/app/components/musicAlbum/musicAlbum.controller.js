import albumsService from '../../services/albums.service';

class MusicAlbumController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 2;
    this.albumsService = albumsService;

    this.album = this.albumsService.getSingleAlbum(this.currentId);

    const previousAlbum = this.albumsService.getNextOrPreviousAlbum(this.currentId);
    console.log('album ctrl: previousAlbum: ', previousAlbum);
    if (!this.album) {
      $state.go('error');
    }

  }
}

export default MusicAlbumController;
