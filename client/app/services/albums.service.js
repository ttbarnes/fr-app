import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  constructor(){
    this.allAlbums = allAlbums;
    this.quoteTruncationCharLimit = 800;

    /*
    // add showReadMore property to album
    // if quote.copy is larger than limit
    */
    this.allAlbums.map((a) => {
      a.quotes.map((q) => {
        if (q.copy.length >= this.quoteTruncationCharLimit) {
          q.showReadMore = true;
        }
      });
    });

    /*
    // get a single album
    */
    this.getSingleAlbum = (id) => {

      //temp album id solution for go live
      let idForJson;
      id == 2 ? idForJson = 0 : idForJson = id;
      return this.allAlbums[idForJson];
    }

  }

}