import moment from 'moment';
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
        const timeMins = moment.utc(gig.date).format('mm');
        
        if (timeMins !== '00') {
          gig.time = moment.utc(gig.date).format('h:mma');
        }

        gig.date = moment(gig.date).format('MMM Do');

        const yearObj = getYearObj(year);

        if (!yearObj) {
          this.gigsByYears.push({
            year,
            gigs: [ gig ]
          });
        } else {
          if (gig.venue.includes('Colchester')) {
          }
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
