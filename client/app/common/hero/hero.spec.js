import HeroModule from './hero'
import HeroController from './hero.controller';
import HeroComponent from './hero.component';
import HeroTemplate from './hero.html';

describe('Hero', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(HeroModule.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new HeroController();
    };
  }));

  describe('Component', () => {

    let component = HeroComponent;

    it('invokes transclude', () => {
      expect(component.transclude).toBeTruthy();
    });

    it('includes the intended template',() => {
      expect(component.template).toEqual(HeroTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(HeroController);
    });

    it('uses `bindings`', () => {
      expect(component.bindings).toBeDefined();
    });

    it('includes the relevant `bindings`', () => {
      expect(component.bindings.title).toBeDefined();
      expect(component.bindings.imgUrl).toBeDefined();
      expect(component.bindings.imgAlt).toBeDefined();
    })

  });

});
