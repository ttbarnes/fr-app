import albumsService from '../../services/albums.service';

class HomeController {
  constructor($window, $scope, albumsService) {
    'ngInject';
    this.$window = $window;
    this.albumsService = albumsService;
    this.latestAlbum = albumsService.allAlbums[0];
    this.justMeAlbum = albumsService.allAlbums[1];

    this.redirectToAlbumPage = function() {
      var url = 'https://fionaross.co.uk/music/album/Red-Flags-and-High-Heels';
      window.location = url;
    };

  }

}

export default HomeController;
