import journalismService from '../../services/journalism.service';

class JournalismController {
  constructor(journalismService) {
    'ngInject';
    this.journalismService = journalismService;

    this.journalismService.getAll().then((data) => {
      this.data = data.data.reverse();
    }, () => {
      this.promiseError = true;
    });

  }

}

export default JournalismController;
