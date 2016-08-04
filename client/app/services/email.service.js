export default class emailService {

  constructor($http){
    'ngInject';

    let service = {

      send: (postData) => {
        return $http.post('http://fiona-ross-test.herokuapp.com/api/postEmail', postData)
      }

    }

    return service
  }

}