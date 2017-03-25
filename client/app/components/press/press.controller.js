class PressController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 2;

    this.album = this.albumsService.getSingleAlbum(this.currentId);
    console.log('PRESS CTRL ', this.album);
    if(!this.album) {
      $state.go('error');
    }
  }
}

export default PressController;
