import template from './bookings.html';
import controller from './bookings.controller';
import './bookings.styl';

let bookingsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default bookingsComponent;
