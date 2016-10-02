import collaborators from '../data/collaborators.json';

export default class collaboratorsService {

  constructor(){

    angular.forEach(collaborators, (c, i) => {
      c.id = i + 1;
    });

    this.collaborators = collaborators;

    this.getSingle = (id) => {
      id = id - 1;
      return this.collaborators[id];
    }

  }

}