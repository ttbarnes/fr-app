import albumsService from '../../services/albums.service';

class HomeController {
  constructor($window, $scope, albumsService) {
    'ngInject';
    this.$window = $window;
    this.albumsService = albumsService;
    this.latestAlbum = albumsService.allAlbums[0];
  }

}

export default HomeController;
