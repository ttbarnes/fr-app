import StickySocialModule from './stickySocial'
import StickySocialComponent from './stickySocial.component';
import StickySocialTemplate from './stickySocial.html';

describe('StickySocial', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StickySocialModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
  }));

  describe('Component', () => {

      let component = StickySocialComponent;

      it('should include the intended template',() => {
        expect(component.template).toEqual(StickySocialTemplate);
      });

  });

});
