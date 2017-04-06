import PressModule from './press'
import PressController from './press.controller';
import PressComponent from './press.component';
import PressTemplate from './press.html';

describe('Press', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PressModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PressController();
    };
  }));

  describe('Component', () => {
    let component = PressComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(PressTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PressController);
    });
  });
});
