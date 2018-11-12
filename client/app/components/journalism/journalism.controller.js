import journalismService from '../../services/journalism.service';

class JournalismController {
  constructor(journalismService) {
    'ngInject';
    this.journalismService = journalismService;
    this.data = journalismService.data;
  }

}

export default JournalismController;
