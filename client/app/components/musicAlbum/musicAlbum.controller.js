import albumsService from '../../services/albums.service';

class MusicAlbumController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.stateParams = $stateParams;
    const currentId = this.stateParams.id;
    this.albumsService = albumsService
    this.albums = albumsService.allAlbums

    this.album = this.albumsService.getSingleAlbum(currentId);
    if(!this.album) {
      $state.go('error');
    }

  }
}

export default MusicAlbumController;
