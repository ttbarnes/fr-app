class PressController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.latestAlbumId = 2;

    this.album = this.albumsService.getSingleAlbum(this.latestAlbumId);
    if(!this.album) {
      $state.go('error');
    }
  }
}

export default PressController;
