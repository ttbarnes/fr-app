import journalismService from '../../services/journalism.service';
import { PAGE_TITLE_JOURNALISM } from '../../constants/constants';

class JournalismController {
  constructor(journalismService, $rootScope) {
    'ngInject';
    this.journalismService = journalismService;
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_JOURNALISM;

    this.promiseError = false;
    this.promiseLoading = true;

    this.journalismService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data.data;
      this.data = this.data.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)).reverse(); // ensure ordered by date
    }, () => {
      this.promiseLoading = false;
      this.promiseError = true;
    }).catch((err) => {
      this.promiseLoading = false;
      this.promiseError = true;
    });

  }

}

export default JournalismController;
