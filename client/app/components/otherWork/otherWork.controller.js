import otherWorkService from '../../services/otherWork.service';

class OtherWorkController {
  constructor(otherWorkService) {
    'ngInject';
    this.otherWorkService = otherWorkService;
    this.data = otherWorkService.data;
  }

}

export default OtherWorkController;
