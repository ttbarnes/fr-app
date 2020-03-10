import pressService from '../../services/press.service';

class PressController {
  constructor(pressService) {
    'ngInject';
    this.pressService = pressService;

    this.promiseError = false;
    this.promiseLoading = true;

    this.pressService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data;
    }, () => {
      this.promiseLoading = false;
      this.promiseError = true;
    }).catch((err) => {
      this.promiseLoading = false;
      this.promiseError = true;
    });

  }
}

export default PressController;
