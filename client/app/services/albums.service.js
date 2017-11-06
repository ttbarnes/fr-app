import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  // NOTE: allAlbums array is 'backawards' (correctly)
  // so the FIRST item in the array is the LAST/LATEST album.

  constructor(){
    this.allAlbums = allAlbums;
    this.allAlbumsLength = this.allAlbums.length;
    console.log('this.allAlbums : ', this.allAlbums);
    console.log('this.allAlbumsLength : ', this.allAlbumsLength);
    this.firstAlbum = this.allAlbums[this.allAlbumsLength - 1];
    console.log('this.firstAlbum : ', this.firstAlbum);
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


  }

}
