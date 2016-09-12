import FooterModule from './footer'
import FooterComponent from './footer.component';
import FooterTemplate from './footer.html';

describe('Footer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FooterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
  }));

  describe('Component', () => {

      let component = FooterComponent;

      it('should include the intended template',() => {
        expect(component.template).toEqual(FooterTemplate);
      });

  });

});
