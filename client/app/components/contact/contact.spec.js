import Services from '../../services/services.js';
import emailService from '../../services/email.service.js'
import ContactModule from './contact'
import ContactController from './contact.controller';
import ContactComponent from './contact.component';
import ContactTemplate from './contact.html';

describe('Contact', () => {
  let $rootScope,
      makeController,
      scope,
      $q,
      $httpBackend,
      emailService,
      sendMailMock = {
        name: 'asdf',
        email: 'asdf@Asdf.co',
        message: 'testing'
      },
      endpoint = 'http://www.fionaross.co.uk/api/postEmail';

  beforeEach(window.module(ContactModule.name));

  beforeEach(function(){
    window.module(Services.name);
  });

  beforeEach(inject((_$rootScope_, $injector, _$q_, _$httpBackend_, emailService) => {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    emailService = emailService;
    scope = $rootScope.$new();
    scope.vm = $rootScope.$new();

    spyOn(emailService, 'send').and.callThrough();

    makeController = () => {
      return new ContactController(emailService, scope);
    };
  }));

  describe('Controller', () => {

    it('should inject emailService', () => {
      let controller = makeController(emailService, {$scope: scope}, $httpBackend);
      expect(controller.emailService).toBeDefined();
    });

    it('should have error set to false', () => {
      let controller = makeController(emailService, {$scope: scope}, $httpBackend);
      expect(controller.error).toBeFalsy();
    });

    it('should have success set to false', () => {
      let controller = makeController(emailService, {$scope: scope}, $httpBackend);
      expect(controller.success).toBeFalsy();
    });

    describe('sendMail', () => {

      it('should be defined', () => {
        let controller = makeController(emailService, {$scope: scope}, $httpBackend);
        expect(controller.sendMail).toBeDefined();
      });

      it('should be a function', () => {
        let controller = makeController();
        expect(controller.sendMail).toEqual(jasmine.any(Function));
      });

      it('should be called successfully', () => {
        let vm = makeController(emailService, {$scope: scope}, $httpBackend);
        spyOn(vm, 'sendMail').and.callThrough();
        vm.sendMail(sendMailMock);
        expect(vm.sendMail).toHaveBeenCalled();
        expect(vm.sendMail).toHaveBeenCalledWith(sendMailMock);
      });

      it('should set error to false', () => {
        let controller = makeController();
        controller.error = true;
        controller.sendMail(sendMailMock);
        expect(controller.error).toBeFalsy();
      });

      it('should set promiseLoading to true', () => {
        let controller = makeController();
        controller.sendMail(sendMailMock);
        expect(controller.promiseLoading).toBeTruthy();
      });

      it('should call emailService.send', () => {
        let controller = makeController();
        controller.sendMail(sendMailMock);
        expect(controller.emailService.send).toHaveBeenCalled();
        expect(controller.emailService.send).toHaveBeenCalledWith(sendMailMock);
      });

      describe('promise success', () => {

        beforeEach(inject(($httpBackend) => {
          $httpBackend.expectPOST(endpoint).respond(200);
        }));

        it('should set promiseLoading to false', () => {
          let vm = makeController(emailService, {$scope: scope}, $httpBackend);
          vm.sendMail(sendMailMock);
          $httpBackend.flush();
          expect(scope.vm.promiseLoading).toBeFalsy();
        });

        it('should set error to false', () => {
          let vm = makeController(emailService, {$scope: scope}, $httpBackend);
          vm.sendMail(sendMailMock);
          $httpBackend.flush();
          expect(scope.vm.error).toBeFalsy();
        });

        it('should set success to true', () => {
          let vm = makeController(emailService, {$scope: scope}, $httpBackend);
          vm.sendMail(sendMailMock);
          $httpBackend.flush();
          expect(scope.vm.success).toBeTruthy();
        });

      });

      describe('promise failure', () => {

        beforeEach(inject(($httpBackend) => {
          $httpBackend.expectPOST(endpoint).respond(500);
        }));

        it('should set promiseLoading to false', () => {
          let vm = makeController(emailService, {$scope: scope}, $httpBackend);
          vm.sendMail();
          $httpBackend.flush();
          expect(scope.vm.promiseLoading).toBeFalsy();
        });

        it('should set error to true', () => {
          let vm = makeController(emailService, {$scope: scope}, $httpBackend);
          vm.sendMail();
          $httpBackend.flush();
          expect(scope.vm.error).toBeTruthy();
        });

      });

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
