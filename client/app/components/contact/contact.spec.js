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
      }


  beforeEach(window.module(ContactModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    emailService = mockEmailService
    makeController = () => {
      return new ContactController(emailService);
    };
  }));

  // describe('Module', () => { });

  describe('Controller', () => {

    it('injects emailService', () => {
      let controller = makeController()
      expect(controller.emailService).to.exist
    })

    it('should have a sendMail function', () => {
      let controller = makeController()
      expect(controller.sendMail).to.exist
    })

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
