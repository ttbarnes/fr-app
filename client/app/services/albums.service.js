import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  // NOTE: allAlbums array is 'backawards' (correctly)
  // so the FIRST item in the array is the LAST/LATEST album.

  constructor(){
    this.allAlbums = allAlbums;
    this.allAlbumsLength = this.allAlbums.length;

    this.firstAlbum = this.allAlbums[this.allAlbumsLength - 1];

    this.latestAlbum = this.allAlbums[0];
    this.latestAlbumId = this.latestAlbum.id;

    this.albumReleasedBeforeLatestAlbum = this.allAlbums[1];

    this.quoteTruncationCharLimit = 800;


    /*
    // add showReadMore property to album
    // if quote.copy is larger than limit
    */
    if (this.allAlbums && this.allAlbums.length) {
      this.allAlbums.map((a) => {
        a.quotes && a.quotes.map((q) => {
          if (q.copy.length >= this.quoteTruncationCharLimit) {
            q.showReadMore = true;
          }
        });
      });
    }

    /*
    // get a single album
    */
    this.getSingleAlbum = (id) => {
      if (id === this.latestAlbumId ||
          Number(id) === this.latestAlbumId) {
        return this.latestAlbum;
      } else if (id === 1 || id === '1') {
        return this.firstAlbum;
      } else {
        return this.allAlbums[id - 1];
      }
    }

    /*
    // get previous or next album
    */
    this.getNextOrPreviousAlbum = (albumId) => {
      if (albumId === 1 ||
          Number(albumId) === 1) {
        return this.latestAlbum;
      }

      if (albumId === this.latestAlbumId || 
          Number(albumId) === this.latestAlbumId) {
        return this.albumReleasedBeforeLatestAlbum;
      } else {
        const previousAlbum = this.allAlbums[Number(albumId)];
        return previousAlbum;
      } 
    }

  }

}
