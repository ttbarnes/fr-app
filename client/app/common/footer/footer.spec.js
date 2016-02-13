import FooterModule from './footer'
import FooterComponent from './footer.component';
import FooterTemplate from './footer.html';

describe('Footer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FooterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {

      let component = FooterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FooterTemplate);
      });

  });
});
