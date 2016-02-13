import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';

describe('Navbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavbarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    // controller specs
    it('has a name property [REMOVE]', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('should have a logo.copy property', () => {
      let controller = makeController();
      expect(controller).to.have.property('logo')
        .that.is.an('object')
          .with.deep.property('copy')
            .that.deep.equals('Fiona Ross')
    })
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(NavbarTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    // });
  });
