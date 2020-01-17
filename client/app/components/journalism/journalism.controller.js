import journalismService from '../../services/journalism.service';

class JournalismController {
  constructor(journalismService) {
    'ngInject';
    this.journalismService = journalismService;
    this.promiseError = false;
    this.promiseLoading = true;

    this.journalismService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data.data.reverse();
      this.data = this.data.sort((a, b) => a.releaseDate - b.releaseDate); // ensure ordered by date
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
