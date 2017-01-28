import data from '../data/news.json';

export default class newsService {

  constructor(){
    this.data = data;

    if (this.data && this.data.length) {
      this.data.map((d) => {
        d.urlTitle = d.title.replace(/\s+/g, '-').toLowerCase();
      });
    }

    this.getSingle = (title) => {
      const data = this.data.find(d => d.urlTitle === title);
      return data;
    }
  }

}