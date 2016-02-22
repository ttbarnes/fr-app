export default class emailService {

  constructor($http){
    "ngInject"
    let service = {

      send: (postData) => {
        return $http.post('http://localhost:2000/api/postEmail', postData)
      }

    }

    return service
  }

}