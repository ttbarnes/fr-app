import * as CONST from '../../constants/constants';

class GigsController {
  constructor(gigsService) {
    'ngInject';
    this.gigsService = gigsService;

    this.years = this.gigsService.getAll();

  }
}

export default GigsController;
