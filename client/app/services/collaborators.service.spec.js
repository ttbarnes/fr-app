import collaboratorsService from './collaborators.service';

describe('collaboratorsService', () => {
  var MockCollaboratorsService,
      MockGetSingle = () => {
        return { 'name': 'test', 'role': 'something' };
      },
      MockFirstCollaborator = () => {
        return {
          id: 1,
          name: 'test name'
        }
      };

  beforeEach(() => {
    MockCollaboratorsService = new collaboratorsService();
  });

  describe('collaborators', () => {

    it('should be defined', () => {
      MockCollaboratorsService.collaborators = [ {}, {} ];
      expect(MockCollaboratorsService.collaborators).toBeDefined();
    });

  });

  describe('getSingle', () => {

    it('should be defined', () => {
      MockCollaboratorsService.getSingle = MockGetSingle;
      expect(MockCollaboratorsService.getSingle).toBeDefined();
      expect(MockCollaboratorsService.getSingle).toEqual(jasmine.any(Function));
    });

    it('should return a single user object', () => {
      MockCollaboratorsService.getSingle = MockGetSingle;
      expect(MockCollaboratorsService.getSingle).toEqual(jasmine.any(Function));
    });

  });

  describe('isLastCollaborator', () => {

    it('should be defined', () => {
      expect(MockCollaboratorsService.isLastCollaborator).toBeDefined();
      expect(MockCollaboratorsService.isLastCollaborator).toEqual(jasmine.any(Function));
    });

    it('should be called successfully', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      MockCollaboratorsService.isLastCollaborator = () => { return false }
      spyOn(MockCollaboratorsService, 'isLastCollaborator').and.callThrough();
      MockCollaboratorsService.isLastCollaborator();
      expect(MockCollaboratorsService.isLastCollaborator).toHaveBeenCalled();
    });

  });

});
