class HeaderController {
  constructor($scope, $rootScope) {
    'ngInject';

    this.logo = {
      copy: 'Fiona Ross'
    }

    this.activeMobileMenu = false;
    this.toggleMobileMenu = () => {
      this.activeMobileMenu = !this.activeMobileMenu;
    }

    $rootScope.$on('stateCollaboratorsInd', (e, stateObj) => {
      stateObj.active == true ? this.stateIsCollabInd = true : this.stateIsCollabInd = false;
    });

  }
}

export default HeaderController;