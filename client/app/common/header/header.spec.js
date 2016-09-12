import HeaderModule from './header'
import HeaderController from './header.controller';
import HeaderComponent from './header.component';
import HeaderTemplate from './header.html';

describe('Header', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeaderModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeaderController();
    };
  }));

  describe('Component', () => {
      let component = HeaderComponent;

      it('should include the intended template',() => {
        expect(component.template).toEqual(HeaderTemplate);
      });

      it('should have `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeDefined()
      });

      it('should invoke the right controller', () => {
        expect(component.controller).toEqual(HeaderController);
      });
  });

  describe('Controller', () => {

    it('should have a logo.copy property', () => {
      let controller = makeController();
      expect(controller.logo).toBeDefined();
      expect(controller.logo.copy).toBeDefined();
      expect(controller.logo.copy).toEqual('Fiona Ross');
    })
  });

});