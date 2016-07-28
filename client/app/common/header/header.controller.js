class HeaderController {
  constructor($scope) {
    'ngInject';

    this.name = 'navbar';

    this.logo = {
      copy: 'Fiona Ross'
    }

    this.activeMobileMenu = false;
    this.toggleMobileMenu = () => {
      this.activeMobileMenu = !this.activeMobileMenu;
    }

  }
}

export default HeaderController;