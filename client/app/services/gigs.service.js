import * as CONST from '../constants/constants';

export default class gigsService {
  constructor($http) {
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => {
        return this.$http.get(CONST.API_GIGS).then(apiData => {
          return apiData.data.data.gigs;
          return this.apiData;
        });
      }
    }

    return service;
  }
}
