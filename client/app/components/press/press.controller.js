import pressService from '../../services/press.service';
import { PAGE_TITLE_PRESS } from '../../constants/constants';

class PressController {
  constructor(pressService, $rootScope) {
    'ngInject';
    this.pressService = pressService;
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_PRESS;

    this.promiseError = false;
    this.promiseLoading = true;

    this.pressService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)).reverse(); // ensure ordered by date
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
