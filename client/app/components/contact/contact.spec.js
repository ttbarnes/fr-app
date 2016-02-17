import ContactModule from './contact'
import ContactController from './contact.controller';
import ContactComponent from './contact.component';
import ContactTemplate from './contact.html';

describe('Contact', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactController();
    };
  }));

  // describe('Module', () => {
  // });

  describe('Controller', () => {

  });

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(ContactTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      let component = ContactComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactController);
      });
  });
});
