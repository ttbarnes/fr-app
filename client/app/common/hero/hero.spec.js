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

  describe('Module', ()=>{
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', ()=>{

    it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });

  });

  describe('Component', () => {

    let component = HeroComponent;

    it('invokes transclude', () => {
      expect(component.transclude).to.be.true
    });

    it('includes the intended template',() => {
      expect(component.template).to.equal(HeroTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HeroController);
    });

    it('uses `bindings`', () => {
      expect(component).to.have.property('bindings')
        .that.is.an('object')
    });

    it('includes the relevant `bindings`', () => {
      expect(component.bindings).to.have.deep.property('title');
      expect(component.bindings).to.have.deep.property('imgUrl');
      expect(component.bindings).to.have.deep.property('imgAlt');
    })

  });

});
