import CollaboratorsModule from './collaborators'
import CollaboratorsController from './collaborators.controller';
import CollaboratorsComponent from './collaborators.component';
import CollaboratorsTemplate from './collaborators.html';

describe('Collaborators', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CollaboratorsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CollaboratorsController();
    };
  }));

  describe('Controller', () => {

  });

  describe('Component', () => {
      // component/directive specs
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
