import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({

  actions: {
    search(params) {
      let formattedDate = moment(params.departureDate).format('YYYY-MM-DD');

      this.transitionToRoute('search-one-way.results', {
        departure: params.departureAirport,
        arrival: params.arrivalAirport,
        departureDate: formattedDate
      }, {
        queryParams: {
          class: params.travelClass,
          numberOfAdult: params.numberOfAdult
        }
      });
    }
  }

});
