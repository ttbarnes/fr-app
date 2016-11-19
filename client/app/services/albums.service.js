import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  constructor(){
    this.allAlbums = allAlbums

    /*
    // get a single album
    */
    this.getSingleAlbum = (id) => {
      return this.allAlbums[id];
    }

  }

}