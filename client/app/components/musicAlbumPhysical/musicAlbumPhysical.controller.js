class MusicAlbumPhysicalController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 2;

    this.album = this.albumsService.getSingleAlbum(this.currentId);
    if(!this.album) {
      $state.go('error');
    }
    if (this.album && !this.album.canOrderPhysicalCopy) {
      $state.go('error');
    }

  }
}

export default MusicAlbumPhysicalController;
