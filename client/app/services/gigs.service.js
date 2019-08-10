import gigs from '../data/gigs.json';

export default class gigsService {

  constructor(){

    this.gigs = gigs;

    this.getAll = () => {
      return this.gigs;
    }

  }

}
