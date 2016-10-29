import TechModule from './tech'
import TechComponent from './tech.component';
import TechTemplate from './tech.html';

describe('Tech', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TechModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Component', () => {

      let component = TechComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(TechTemplate);
      });

  });
});
