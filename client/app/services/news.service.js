import data from '../data/news.json';

export default class newsService {

  constructor(){
    this.data = data;

    this.getSingle = (id) => {
      return this.data[id - 1];
    }
  }

}