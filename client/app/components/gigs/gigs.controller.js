import moment from 'moment';
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

      this.gigsByYears = [];

      const getYearObj = (year) => this.gigsByYears.find((yearObj) =>
        yearObj.year === year
      );

      this.data.forEach((gig) => {
        const year = moment(gig.date).format('YYYY');

        const yearObj = getYearObj(year);

        if (!yearObj) {
          this.gigsByYears.push({
            year,
            gigs: []
          });
        } else {
          yearObj.gigs.push(gig);
        }
      });
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
