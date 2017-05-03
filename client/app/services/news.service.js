import * as CONST from '../constants/constants';
import data from '../data/news.json';

export default class newsService {

  constructor($http){
    'ngInject';
    this.data = data;
    this.$http = $http;

    let service = {

      getAll: () => this.$http.get(CONST.API_NEWS),

      getSingle: (title) => {
        const data = this.data.find(d => d.urlTitle === title);
        return data;
      }
    }

    return service;

  }

}
