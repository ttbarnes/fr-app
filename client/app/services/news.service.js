import * as CONST from '../constants/constants';

export default class newsService {

  constructor($http){
    'ngInject';
    this.$http = $http;

    let service = {

      getAll: () => this.$http.get(CONST.API_NEWS),

      getSingle: (title) => {
        return this.$http.get(CONST.API_NEWS).then(data =>
          data.data.filter(a => a.urlTitle === title)
        );
      }
    }

    return service;

  }

}
