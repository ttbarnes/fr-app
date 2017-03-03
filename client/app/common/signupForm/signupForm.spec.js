import SignupFormModule from './signupForm'
import SignupFormComponent from './signupForm.component';
import SignupFormTemplate from './signupForm.html';

describe('SignupForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SignupFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
  }));

  describe('Component', () => {

      let component = SignupFormComponent;

      it('should include the intended template',() => {
        expect(component.template).toEqual(SignupFormTemplate);
      });

  });

});
