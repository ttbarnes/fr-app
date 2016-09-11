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

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeaderComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(HeaderTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeDefined()
      });

      it('invokes the right controller', () => {
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

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(HeaderTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    // });
  });
});