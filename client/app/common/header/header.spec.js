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
      expect(controller.logo.copy).toEqual(jasmine.any(String));
      expect(controller.logo.copy).toEqual('Fiona Ross');
    });

    it('should have activeMobileMenu set to false', () => {
      let controller = makeController();
      expect(controller.activeMobileMenu).toBeDefined();
      expect(controller.activeMobileMenu).toBeFalsy();
    });

    describe('toggleMobileMenu', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller.toggleMobileMenu).toBeDefined();
        expect(controller.toggleMobileMenu).toEqual(jasmine.any(Function));
      });

      it('should be called successfully', () => {
        let controller = makeController();
        spyOn(controller, 'toggleMobileMenu').and.callThrough();
        controller.toggleMobileMenu();
        expect(controller.toggleMobileMenu).toHaveBeenCalled();
      });

      it('should set activeMobileMenu to true', () => {
        let controller = makeController();
        spyOn(controller, 'toggleMobileMenu').and.callThrough();
        controller.activeMobileMenu = false;
        controller.toggleMobileMenu();
        expect(controller.activeMobileMenu).toBeTruthy();
      });

      it('should set activeMobileMenu to false', () => {
        let controller = makeController();
        spyOn(controller, 'toggleMobileMenu').and.callThrough();
        controller.activeMobileMenu = true;
        controller.toggleMobileMenu();
        expect(controller.activeMobileMenu).toBeFalsy();
      });

    });

  });

});