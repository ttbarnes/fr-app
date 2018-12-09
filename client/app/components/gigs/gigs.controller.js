import * as CONST from '../../constants/constants';

class GigsController {
  constructor(gigsService) {
    'ngInject';
    this.gigsService = gigsService;
    this.defaultThumb = CONST.GIGS_DEFAULT_THUMB;


    this.years = this.gigsService.getAll();

  }
}

export default GigsController;
