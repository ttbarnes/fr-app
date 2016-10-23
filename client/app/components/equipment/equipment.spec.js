import EquipmentModule from './equipment'
import EquipmentComponent from './equipment.component';
import EquipmentTemplate from './equipment.html';

describe('Equipment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EquipmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Component', () => {

      let component = EquipmentComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(EquipmentTemplate);
      });

  });
});
