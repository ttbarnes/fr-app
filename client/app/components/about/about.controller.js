import { PAGE_TITLE_ABOUT } from '../../constants/constants';

class AboutController {
  constructor($rootScope) {
    'ngInject';

    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_ABOUT;
  }
}

export default AboutController;
