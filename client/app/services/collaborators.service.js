import collaborators from '../data/collaborators.json';

export default class collaboratorsService {

  constructor(){
    angular.forEach(collaborators, (c, i) => {
      c.id = i + 1;
    });
    this.collaborators = collaborators;
  }

}