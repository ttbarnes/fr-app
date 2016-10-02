import data from '../data/collaborators.json';
import collaboratorsService from './collaborators.service';

describe('collaboratorsService', () => {

  var MockCollaboratorsService,
      MockGetSingle = () => {
        return data[3];
      };

  beforeEach(() => {
    MockCollaboratorsService = new collaboratorsService();
  });

  describe('collaborators', () => {

    it('should be defined', () => {
      MockCollaboratorsService.collaborators = data;
      expect(MockCollaboratorsService.collaborators).toBeDefined();
    });

  });

  describe('getSingle', () => {

    it('should be defined', () => {
      MockCollaboratorsService.getSingle = MockGetSingle();
      expect(MockCollaboratorsService.getSingle).toBeDefined();
      expect(MockCollaboratorsService.getSingle).toEqual(jasmine.any(Function));
    });

    it('should return a single user object', () => {
      MockCollaboratorsService.getSingle = MockGetSingle();
      expect(MockCollaboratorsService.getSingle).toEqual(jasmine.any(Object));
    });

  });

});
