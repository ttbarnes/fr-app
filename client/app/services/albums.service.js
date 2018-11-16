import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  // NOTE: allAlbums array is 'backwards' (correctly)
  // so the FIRST item in the array is the LAST/LATEST album.

  constructor(){
    this.allAlbums = allAlbums;
    this.allAlbumsLength = this.allAlbums.length;

    this.firstAlbum = this.allAlbums[this.allAlbumsLength - 1];

    this.latestAlbum = this.allAlbums[0];
    this.latestAlbumId = this.latestAlbum.id;

    this.albumReleasedBeforeLatestAlbum = this.allAlbums[1];

    this.validStateParamIdsForAudioCds = ['3', '2'];
    
    this.isValidStateParamAlbumIdForAudioCd = (id) => this.validStateParamIdsForAudioCds.includes(id);

    this.quoteCharLimit = 800;


    /*
    // add showReadMore property to album
    // if quote.copy is larger than limit
    */
    if (this.allAlbums && this.allAlbums.length) {
      this.allAlbums.map((a) => {
        a.quotes && a.quotes.map((q) => {
          if (q.copy.length >= this.quoteCharLimit) {
            q.showReadMore = true;
          }
        });
      });
    }

    this.getAlbumById = (id) => {
      return this.allAlbums.find(a => a.id === Number(id));
    }

    /*
    // get all albums, apart from a comingSoon album or a given albumId
    */
    this.getAllOtherAlbums = (albumId) => {
      const filteredAlbums = this.allAlbums.filter((a) =>
        (a.id !== Number(albumId)) && !a.comingSoon
      );
      return filteredAlbums;
    }

    /*
    // get all released albums
    */
    this.getAllReleasedAlbums = () => this.allAlbums.filter((a) => !a.comingSoon);

  }

}
