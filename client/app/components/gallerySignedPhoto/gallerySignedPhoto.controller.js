class musicAlbumAudioCdController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 2;

    this.album = this.albumsService.getSingleAlbum(this.currentId);
    if(!this.album) {
      $state.go('error');
    }
    if (this.album && !this.album.canOrderAudioCd) {
      $state.go('error');
    }

  }
}

export default musicAlbumAudioCdController;
