import { PAGE_TITLE_PRIVACY_POLICY } from '../../constants/constants';

class privacyPolicyController {
  constructor($rootScope) {
    'ngInject';
    this.rootScope = $rootScope;
    this.rootScope.ogTitle = PAGE_TITLE_PRIVACY_POLICY;
  }
}

export default privacyPolicyController;
