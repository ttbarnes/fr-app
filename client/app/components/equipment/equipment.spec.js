import EquipmentModule from './equipment'
import EquipmentController from './equipment.controller';
import EquipmentComponent from './equipment.component';
import EquipmentTemplate from './equipment.html';

describe('Equipment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EquipmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EquipmentController();
    };
  }));

  describe('Controller', () => {

  });

  describe('Component', () => {
      // component/directive specs
      let component = EquipmentComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(EquipmentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(EquipmentController);
      });
  });
});
