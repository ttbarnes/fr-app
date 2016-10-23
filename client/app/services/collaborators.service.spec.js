import collaboratorsService from './collaborators.service';

describe('collaboratorsService', () => {

  //todo: get JSON data working inside unit test

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

  describe('firstCollaborator', () => {

    it('should be defined', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      expect(MockCollaboratorsService.firstCollaborator).toBeDefined();
      expect(MockCollaboratorsService.firstCollaborator).toEqual(jasmine.any(Function));
    });

    it('should be called successfully', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      spyOn(MockCollaboratorsService, 'firstCollaborator').and.callThrough();
      MockCollaboratorsService.firstCollaborator();
      expect(MockCollaboratorsService.firstCollaborator).toHaveBeenCalled();
    });

    it('should return a user object', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      expect(MockCollaboratorsService.firstCollaborator).toEqual(jasmine.any(Function));
      const getFirstCollab = MockCollaboratorsService.firstCollaborator();
      expect(getFirstCollab).toBeDefined();
      expect(getFirstCollab).toEqual(jasmine.any(Object));
      expect(getFirstCollab.id).toBeDefined();
      expect(getFirstCollab.id).toEqual(jasmine.any(Number));
      expect(getFirstCollab.name).toBeDefined();
      expect(getFirstCollab.name).toEqual(jasmine.any(String));
    });

  });

  describe('isFirstCollaborator', () => {

    it('should be defined', () => {
      expect(MockCollaboratorsService.isFirstCollaborator).toBeDefined();
      expect(MockCollaboratorsService.isFirstCollaborator).toEqual(jasmine.any(Function));
    });

    it('should be called successfully', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      spyOn(MockCollaboratorsService, 'isFirstCollaborator').and.callThrough();
      MockCollaboratorsService.isFirstCollaborator();
      expect(MockCollaboratorsService.isFirstCollaborator).toHaveBeenCalled();
    });

    it('should return a user object', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      expect(MockCollaboratorsService.isFirstCollaborator).toEqual(jasmine.any(Function));
      const isFirstCollab = MockCollaboratorsService.isFirstCollaborator(2);
      expect(isFirstCollab).toBeDefined();
    });

    it('should return false if not the first collaborator', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      expect(MockCollaboratorsService.isFirstCollaborator).toEqual(jasmine.any(Function));
      const isFirstCollab = MockCollaboratorsService.isFirstCollaborator(2);
      expect(isFirstCollab).toBeDefined();
      expect(isFirstCollab).toEqual(jasmine.any(Boolean));
      expect(isFirstCollab).toBeFalsy();
    });

    it('should return true if the first collaborator', () => {
      MockCollaboratorsService.firstCollaborator = MockFirstCollaborator;
      expect(MockCollaboratorsService.isFirstCollaborator).toEqual(jasmine.any(Function));
      const isFirstCollab = MockCollaboratorsService.isFirstCollaborator(1);
      expect(isFirstCollab).toBeDefined();
      expect(isFirstCollab).toEqual(jasmine.any(Boolean));
      expect(isFirstCollab).toBeTruthy();
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
