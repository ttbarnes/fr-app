import allPress from '../../data/press.json';

class PressController {
  constructor($state) {
    'ngInject';
    this.press = allPress;
    if(!this.press) {
      $state.go('error');
    }
  }
}

export default PressController;
