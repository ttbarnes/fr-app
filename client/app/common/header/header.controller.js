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

    $rootScope.$on('stateMusicAlbum', (e, stateObj) => {
      stateObj.active == true ? this.stateIsMusicAlbum = true : this.stateIsMusicAlbum = false;
    });

    $rootScope.$on('stateNews', (e, stateObj) => {
      stateObj.active == true ? this.stateIsNews = true : this.stateIsNews = false;
    });

  }
}

export default HeaderController;