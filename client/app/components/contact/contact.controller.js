import { PAGE_TITLE_CONTACT } from '../../constants/constants';

class ContactController {
  constructor($rootScope) {
    'ngInject';
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_CONTACT;
  }
}

export default ContactController;
