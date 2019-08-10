class musicAlbumAudioCdController {
  constructor($state, $stateParams, albumsService) {
    'ngInject';
    this.albumsService = albumsService;
    this.stateParams = $stateParams;
    this.currentId = this.stateParams.id;
    
    const isValidAudioCdAlbum = this.albumsService.isValidStateParamAlbumIdForAudioCd(this.currentId);

    if (!isValidAudioCdAlbum) {
      $state.go('error');
    } else {
      this.album = this.albumsService.getAlbumById(this.currentId);

      if (!this.album) {
        $state.go('error');
      }

      if (this.album && (!this.album.canPreOrderAudioCd && !this.album.canOrderAudioCd)) {
        $state.go('error');
      }
    }

    const splitCookies = document.cookie.split(';');
    if (splitCookies) {
      let constentCookie = splitCookies.filter(function (item) {
        return item.indexOf('CookieScriptConsent=') >= 0
      });
      const hasRejected = constentCookie.length && constentCookie[0].includes('reject');
      const hasAccepted = constentCookie.length && constentCookie[0].includes('accept');
      if (hasRejected) {
        this.consentRejected = true;
      }
      if (hasAccepted) {
        this.consentAccepted = true;
      }
    }

  }
}

export default musicAlbumAudioCdController;
