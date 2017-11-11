class PressController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;

    // TODO: clean press data structures/consumption
    // currently all press is held under 'just me' album.
    // this.latestAlbum = this.albumsService.latestAlbumId;
    // this.allPress = [];
    this.albumId = 2;

    this.album = this.albumsService.getSingleAlbum(this.albumId);
    if(!this.album) {
      $state.go('error');
    }
  }
}

export default PressController;
