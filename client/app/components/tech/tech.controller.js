class TechController {
  constructor(techService) {
    'ngInject';
    this.techService = techService;

    this.tech = this.techService.getAll();

  }
}

export default TechController;
