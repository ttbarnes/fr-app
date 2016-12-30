import BookingsModule from './bookings';
import BookingsComponent from './bookings.component';
import BookingsTemplate from './bookings.html';

describe('Bookings', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BookingsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BookingsController();
    };
  }));

  describe('Component', () => {
      let component = BookingsComponent;

      it('includes the intended template', () => {
        expect(component.template).toEqual(BookingsTemplate);
      });

  });
});
