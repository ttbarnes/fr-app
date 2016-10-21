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

    this.firstCollaborator = () => {
      const c = collaborators[0],
            obj = {
              id: c.id,
              name: c.name
            };
      return obj;
    };

    this.isFirstCollaborator = (id) => {
      const c = this.firstCollaborator();
      if (id === c.id) {
        return true;
      }
      return false;
    }

    this.isLastCollaborator = (id) => {
      const collabs = collaborators;
      const lastCollab = collaborators[collaborators.length - 1].id;
      if (id >= lastCollab) {
        return true;
      }
      return false;
    }

    this.getPrevNextCollab = (id) => {
      const currentId = parseInt(id, 10);
            const prevCollab = this.isFirstCollaborator(currentId) ? false : this.collaborators[currentId - 2],
                  nextCollab = this.isLastCollaborator(currentId) ? false : this.collaborators[currentId],
                  collabState = {
                    prev: {
                      id: this.isFirstCollaborator(currentId) ? false : prevCollab.id,
                      name: this.isFirstCollaborator(currentId) ? false : prevCollab.name
                    },
                    next: {
                      id: this.isLastCollaborator(currentId) ? this.firstCollaborator().id : nextCollab.id,
                      name: this.isLastCollaborator(currentId) ? this.firstCollaborator().name : nextCollab.name
                    }
                  };
      return collabState;
    }

  }

}