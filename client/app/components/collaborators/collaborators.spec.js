import CollaboratorsModule from './collaborators'
import CollaboratorsController from './collaborators.controller';
import CollaboratorsComponent from './collaborators.component';
import CollaboratorsTemplate from './collaborators.html';
import Services from '../../services/services.js';
import CollaboratorsService from '../../services/collaborators.service.js';

describe('Collaborators', () => {
  let $rootScope,
      makeController,
      collaboratorsService,
      mockCollaboratorsService = {
        collaborators : [
          { name: 'test name'},
          { name: 'another name'}
        ]
      };

  beforeEach(() => {
    window.module(Services.name);
    window.module(CollaboratorsModule.name);
  });
  beforeEach(inject((_$rootScope_, collaboratorsService) => {
    $rootScope = _$rootScope_;
    collaboratorsService = mockCollaboratorsService;
    makeController = () => {
      return new CollaboratorsController(mockCollaboratorsService);
    };
  }));

  describe('Controller', () => {

    it('should inject collaborators service', () => {
      let controller = makeController(collaboratorsService);
      expect(controller.collaboratorsService).toBeDefined();
    });

    it('should have collaborators defined', () => {
      let controller = makeController(collaboratorsService);
      expect(controller.collaborators).toBeDefined();
      expect(controller.collaborators).toEqual(jasmine.any(Array));
    });

  });

  describe('Component', () => {
    let component = CollaboratorsComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(CollaboratorsTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CollaboratorsController);
    });
  });
});
