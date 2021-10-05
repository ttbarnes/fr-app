import albumsService from '../../services/albums.service';
import { PAGE_TITLE_MUSIC } from '../../constants/constants';

class MusicController {
  constructor(albumsService, $rootScope) {
    'ngInject';
    this.albumsService = albumsService;
    this.albums = this.albumsService.allAlbums;
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_MUSIC;

    this.redirectToAlbumPage = function(albumName) {
      // var url = 'https://fionaross.co.uk/music/' + albumName;
      // var url = 'http://google.com';
      // var url = 'https://fr-react.netlify.app/music/Fierce-and-Non-Compliant';
      var url = 'https://fionaross.co.uk/music/' + 3;
      console.log('url ', url);
      // window.location.replace(url);
      window.location = url;
    };
  }
}

export default MusicController;
