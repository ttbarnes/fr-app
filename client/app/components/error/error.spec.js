import ErrorModule from './error'
import ErrorComponent from './error.component';
import ErrorTemplate from './error.html';

describe('Error', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ErrorModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ErrorController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  describe('Component', () => {
      // component/directive specs
      let component = ErrorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ErrorTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ErrorController);
      });
  });
});
