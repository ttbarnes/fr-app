class MusicAlbumReviewsController {
  constructor($state, $stateParams, $rootScope, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.rootScope = $rootScope;
    this.currentId = this.stateParams.id || 2;

    this.album = this.albumsService.getAlbumById(this.currentId);

    this.rootScope.ogTitle = 'Reviews - ' + this.album.name + ' - Fiona Ross';

    if (this.album.albumCredits && this.album.albumCredits[0]) {
      this.rootScope.ogDescription = this.album.albumCredits[0];
    }
  }
}

export default MusicAlbumReviewsController;
