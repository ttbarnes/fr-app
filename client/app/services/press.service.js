import * as CONST from '../constants/constants';
export default class pressService {

  constructor($http) {
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => {
        return this.$http.get(CONST.API_PRESS).then(apiData => {
          return apiData.data.data.press;
        });
      }
    }

    return service;

  }

}
