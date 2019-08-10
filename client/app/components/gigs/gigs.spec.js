import GigsModule from './gigs';
import GigsComponent from './gigs.component';
import GigsTemplate from './gigs.html';

describe('Gigs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GigsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GigsController();
    };
  }));

  describe('Component', () => {
      let component = GigsComponent;

      it('includes the intended template', () => {
        expect(component.template).toEqual(GigsTemplate);
      });

  });
});
