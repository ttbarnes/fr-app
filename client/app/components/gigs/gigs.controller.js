import * as CONST from '../../constants/constants';

class GigsController {
  constructor(gigsService) {
    'ngInject';
    this.gigsService = gigsService;
    this.defaultThumb = CONST.GIGS_DEFAULT_THUMB;


    this.gigs = this.gigsService.getAll();

  }
}

export default GigsController;
