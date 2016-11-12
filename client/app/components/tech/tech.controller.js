class TechController {
  constructor(techService) {
    'ngInject';
    this.techService = techService;

    this.tech = this.techService.getAll();

    this.activeCategory = this.tech[0].title;

    this.setActiveCategory = (category) => {
      this.activeCategory = category;
    }

  }
}

export default TechController;
