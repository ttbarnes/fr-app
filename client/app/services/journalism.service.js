import * as CONST from '../constants/constants';

export default class journalismService {

  constructor($http){
    'ngInject';
    this.$http = $http;

    let service = {
      getAll: () => this.$http.get(CONST.API_JOURNALISM)
    }

    return service;
  }

}
