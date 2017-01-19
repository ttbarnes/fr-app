class MusicAlbumReviewsController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id || 2;

    this.album = this.albumsService.getSingleAlbum(this.currentId);
    console.log('hey: ', this.album);
    console.log('hey 2: ', this.album.quotes);
    if(!this.album) {
      $state.go('error');
    }

  }
}

export default MusicAlbumReviewsController;
