import albumsService from '../../services/albums.service';

class HomeController {
  constructor($window, $scope, albumsService) {
    'ngInject';
    this.$window = $window;
    this.albumsService = albumsService;
    this.latestAlbum = albumsService.allAlbums[0];

    this.$window.onscroll = () => {
      const tabletScreenSize = window.matchMedia('(max-width: 1000px)').matches;
      const largeScreenSize = window.matchMedia('(min-width: 1000px)').matches;
      if (tabletScreenSize && document.body.scrollTop > 480) {
        this.showBgImage = true;
      } else if (largeScreenSize) {
          this.showBgImage = false;
        if (document.body.scrollTop > 430) {
          this.showBgImage = true;
        }
      } else {
        this.showBgImage = false;
      }
      $scope.$digest();
    };

  }

}

export default HomeController;
