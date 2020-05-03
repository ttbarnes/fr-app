// import * as CONST from '../../constants/constants';

// class GigsController {
//   constructor(gigsService) {
//     'ngInject';
//     this.gigsService = gigsService;

//     this.years = this.gigsService.getAll();

//   }
// }

// export default GigsController;


import gigsService from '../../services/gigs.service';

class GigsController {
  constructor(gigsService) {
    'ngInject';
    this.gigsService = gigsService;

    this.promiseError = false;
    this.promiseLoading = true;

    this.gigsService.getAll().then((data) => {
      this.promiseLoading = false;
      this.data = data.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse(); // ensure ordered by date
      console.log('data', data);
      // TODO: organise by years
    }, () => {
      this.promiseLoading = false;
      this.promiseError = true;
    }).catch((err) => {
      this.promiseLoading = false;
      this.promiseError = true;
    });

  }
}

export default GigsController;
