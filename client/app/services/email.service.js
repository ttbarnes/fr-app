import * as CONST from '../constants/constants';

export default class emailService {

  constructor($http){
    'ngInject';

    let service = {

      send: (postData) => {
        return $http.post(CONST.EMAIL_POST, postData)
      }

    }

    return service
  }

}