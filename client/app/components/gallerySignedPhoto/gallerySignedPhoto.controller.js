class musicAlbumAudioCdController {
  constructor() {
    'ngInject';
   
    this.photos = {
      group1: [
        { url: "./images/signed/1.jpg", alt:"Fiona Ross Signed Photo 1" },
        { url: "./images/signed/2.jpg", alt:"Fiona Ross Signed Photo 2" }
      ],
      group2: [
        { url: "./images/signed/3.jpg", alt:"Fiona Ross Signed Photo 3" },
        { url: "./images/signed/4.jpg", alt:"Fiona Ross Signed Photo 4" }
      ]
    };

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
