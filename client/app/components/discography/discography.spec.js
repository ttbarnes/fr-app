import DiscographyModule from './discography'
import DiscographyController from './discography.controller';
import DiscographyComponent from './discography.component';
import DiscographyTemplate from './discography.html';

describe('Discography', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DiscographyModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new discographyController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DiscographyTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DiscographyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DiscographyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DiscographyController);
      });
  });
});
