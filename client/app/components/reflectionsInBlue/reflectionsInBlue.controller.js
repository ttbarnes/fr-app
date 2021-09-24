import { PAGE_TITLE_REFLECTIONS_IN_BLUE } from '../../constants/constants';

class privacyPolicyController {
  constructor($rootScope) {
    'ngInject';
    this.rootScope = $rootScope;
    this.rootScope.ogTitle = PAGE_TITLE_REFLECTIONS_IN_BLUE;
    this.rootScope.ogDescription = '33 poems written by Audrey Ross';
  }
}

export default privacyPolicyController;
