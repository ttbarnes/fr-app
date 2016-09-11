import ErrorModule from './error'
import ErrorComponent from './error.component';
import ErrorTemplate from './error.html';

describe('Error', () => {
  let $rootScope;

  beforeEach(window.module(ErrorModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
  }));

  describe('Component', () => {

      let component = ErrorComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(ErrorTemplate);
      });

  })

});
