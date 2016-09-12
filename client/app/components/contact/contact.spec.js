import emailService from '../../services/email.service'
import ContactModule from './contact'
import ContactController from './contact.controller';
import ContactComponent from './contact.component';
import ContactTemplate from './contact.html';

describe('Contact', () => {
  let $rootScope, makeController;

  var emailService,
      mockEmailService = {
        send: () => {}
      };

  beforeEach(window.module(ContactModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    emailService = mockEmailService
    makeController = () => {
      return new ContactController(emailService);
    };
  }));

  describe('Controller', () => {

    it('should inject emailService', () => {
      let controller = makeController();
      expect(controller.emailService).toBeDefined();
    });

    it('should have a sendMail function', () => {
      let controller = makeController();
      expect(controller.sendMail).toBeDefined();
    });

  });

  describe('Component', () => {

    let component = ContactComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(ContactTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(ContactController);
    });

  });

});
