import AboutModule from './about';
import AboutComponent from './about.component';
import AboutTemplate from './about.html';

describe('About', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AboutModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AboutController();
    };
  }));

  describe('Component', () => {
      let component = AboutComponent;

      it('includes the intended template', () => {
        expect(component.template).toEqual(AboutTemplate);
      });

  });
});
