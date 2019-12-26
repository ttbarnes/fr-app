import * as CONST from '../constants/constants';
import originalNews from '../data/original-news.json';

export default class newsService {

  constructor($http){
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => {
        return this.$http.get(CONST.API_NEWS).then(apiData => {
          this.apiData = apiData.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); // ensure ordered by date
          return [
            ...this.apiData.reverse(),
            ...originalNews
          ]
        });
      },

      getSingle: (title) => {
        return this.$http.get(CONST.API_NEWS).then(data =>
          data.data.filter(a => a.urlTitle === title)
        );
      }
    }

    return service;

  }

}
