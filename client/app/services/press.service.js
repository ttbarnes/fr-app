import * as CONST from '../constants/constants';
export default class newsService {

  constructor($http) {
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => {
        return this.$http.get(CONST.API_PRESS).then(apiData => {
          return apiData.data.data.press;
          return this.apiData;
        });
      }
    }

    return service;

  }

}
