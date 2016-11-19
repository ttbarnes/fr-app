import allAlbums from '../data/allAlbums.json';

export default class albumsService {

  constructor(){
    this.allAlbums = allAlbums

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