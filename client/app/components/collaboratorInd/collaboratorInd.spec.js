import CollaboratorIndModule from './collaboratorInd'
import CollaboratorIndController from './collaboratorInd.controller';
import CollaboratorIndComponent from './collaboratorInd.component';
import CollaboratorIndTemplate from './collaboratorInd.html';

describe('CollaboratorInd', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CollaboratorIndModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CollaboratorIndController();
    };
  }));

  describe('Controller', () => {

  });

  describe('Component', () => {
    let component = Collaborator-indComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(CollaboratorIndTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component,controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CollaboratorIndController);
    });
});
});
