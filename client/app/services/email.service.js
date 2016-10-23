export default class emailService {

  constructor($http){
    'ngInject';

    let service = {

      send: (postData) => {
        return $http.post('https://fr-app.herokuapp.com/api/postEmail', postData)
      }

    }

    return service
  }

}