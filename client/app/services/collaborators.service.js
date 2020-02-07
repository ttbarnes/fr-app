import * as CONST from '../constants/constants';
// import collaborators from '../data/collaborators.json';

export default class collaboratorsService {
  constructor($http){
    'ngInject';
    // angular.forEach(collaborators, (c, i) => {
    //   c.id = i + 1;
    // });

    // this.collaborators = collaborators;
    this.collaborators = [];

    this.$http = $http;

    this.getAll = () => {
      return this.$http.get(CONST.API_COLLABORATORS).then(apiData => {
        this.apiData = apiData.data.data.collaborators.sort((a, b) => {
          if (Number(a.orderNumber) > Number(b.orderNumber)) {
            return 1;
          }
          return -1;
        });
        this.collaborators = this.apiData;
        return this.apiData;
      });
    }

    /*
    // get any single collaborator
    */
    // this.getSingle = (id) => {
    //   const result = this.collaborators.find((collaborator) => collaborator.collabId === id);
    //   return result;
    // }

    // /*
    // // check if a collaborator is the last
    // */
    // this.isLastCollaborator = (id) => {
    //   const lastCollabId = collaborators[collaborators.length - 1].collabId;
    //   if (id === lastCollabId) {
    //     return true;
    //   }
    //   return false;
    // }
    
    // /*
    // // get the next collaborator from id
    // */
    // this.nextCollaborator = (id) => {
    //   const currentCollabIndex = this.collaborators.findIndex((collab) => collab.collabId === id);
    //   return this.collaborators[currentCollabIndex + 1];
    // }

    // /*
    // // create collaborator object for UI links and text
    // */
    // this.getPrevNextCollab = (id) => {
    //   const isLastCollab = this.isLastCollaborator(id);
    //   const collabState = {};
    //   let nextCollabObj;

    //   if (isLastCollab) {
    //     nextCollabObj = this.collaborators[0];
    //   } else {
    //     nextCollabObj = this.nextCollaborator(id);
    //   }

    //   collabState.next = {
    //     collabId: nextCollabObj.collabId,
    //     name: nextCollabObj.name
    //   };
    //   return collabState;
    // }

  }

}
