import * as CONST from '../constants/constants';
export default class newsService {

  constructor($http) {
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => {
        return this.$http.get(CONST.API_PRESS).then(apiData => {
          this.apiData = apiData.data.data.press.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)); // ensure ordered by date
          return this.apiData;
        });
      }
    }

    return service;

  }

}
