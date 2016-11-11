import CollaboratorIndModule from './collaboratorInd'
import CollaboratorIndController from './collaboratorInd.controller';
import CollaboratorIndComponent from './collaboratorInd.component';
import CollaboratorIndTemplate from './collaboratorInd.html';

describe('CollaboratorInd', () => {
  let $rootScope,
      makeController,
      $state,
      $stateParams,
      collaboratorsService,
      mockCollaboratorsService = {
        getSingle: () => {
          return {
            name: 'test',
            id: 1
          }
        },
        getPrevNextCollab: () => {
          return {
            prev: {
              id: 2,
              name: 'someone'
            },
            next: {
              id: 4,
              name: 'another person'
            }
          }
        },
        isLastCollaborator: () => {
          return false;
        }
      },
      mockStateParams = {
        id: 1
      };

  beforeEach(window.module(CollaboratorIndModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = mockStateParams;
    collaboratorsService = mockCollaboratorsService;
    makeController = () => {
      return new CollaboratorIndController($state, $stateParams, collaboratorsService);
    };
  }));

  describe('Controller', () => {

    it('should inject collaboratorsService', () => {
      let controller = makeController();
      expect(controller.collaboratorsService).toBeDefined();
      expect(controller.collaboratorsService).toEqual(mockCollaboratorsService)
    });

    it('should assign a collab to scope ', () => {
      let controller = makeController();
      expect(controller.collab).toBeDefined();
      expect(controller.collab).toEqual(jasmine.any(Object));
      expect(controller.collab).toEqual(mockCollaboratorsService.getSingle());
    });

    it('should create collabState ', () => {
      let controller = makeController();
      let expectedCollabState = {
        detail: mockCollaboratorsService.getPrevNextCollab(),
        onLast: false
      };
      expect(controller.collabState).toBeDefined();
      expect(controller.collabState).toEqual(jasmine.any(Object));
      expect(controller.collabState).toEqual(expectedCollabState);
    });

  });

  describe('Component', () => {
    let component = CollaboratorIndComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(CollaboratorIndTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CollaboratorIndController);
    });
  });

});
