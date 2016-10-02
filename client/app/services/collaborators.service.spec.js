import collaboratorsService from './collaborators.service';

describe('collaboratorsService', () => {

  //todo: get JSON data working inside unit test

  var MockCollaboratorsService,
      MockGetSingle = () => {
        return { 'name': 'test', 'role': 'something' };
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

});
