import gigs from '../data/gigs.json';

export default class gigsService {

  constructor(){

    this.gigs = gigs;

    /*
    // get all gigs
    */
    this.getAll = () => {
      return this.gigs;
    }

  }

}