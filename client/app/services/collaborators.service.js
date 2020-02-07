import * as CONST from '../constants/constants';

export default class collaboratorsService {
  constructor($http){
    'ngInject';
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
    // check if a collaborator is the last
    */
    this.isLastCollaborator = (urlName) => {
      const lastCollabUrlName = this.collaborators[this.collaborators.length - 1].urlName;
      if (urlName === lastCollabUrlName) {
        return true;
      }
      return false;
    }
    
    /*
    // get the next collaborator from urlName
    */
    this.nextCollaborator = (urlName) => {
      const currentCollabIndex = this.collaborators.findIndex((collab) => collab.urlName === urlName);
      return this.collaborators[currentCollabIndex + 1];
    }

    /*
    // create collaborator object for UI links and text
    */
    this.getPrevNextCollab = (urlName) => {
      const isLastCollab = this.isLastCollaborator(urlName);

      const collabState = {};
      let nextCollabObj;

      if (isLastCollab) {
        nextCollabObj = this.collaborators[0];
      } else {
        nextCollabObj = this.nextCollaborator(urlName);
      }

      collabState.next = {
        urlName: nextCollabObj.urlName,
        name: nextCollabObj.name
      };
      return collabState;
    }

  }

}
