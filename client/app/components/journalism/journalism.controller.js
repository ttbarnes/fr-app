import journalismService from '../../services/journalism.service';

class JournalismController {
  constructor(journalismService) {
    'ngInject';
    this.journalismService = journalismService;
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
