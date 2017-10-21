import Controller from '@ember/controller';

/* global moment */
export default Controller.extend({
  actions: {
    search(params) {
      let formattedDepartureDate = moment(params.departureDate).format('YYYY-MM-DD');
      let formattedReturnDate = moment(params.returnDate).format('YYYY-MM-DD');

      this.transitionToRoute('search-round-trip.results', {
        departure: params.departureAirport,
        arrival: params.arrivalAirport,
        departureDate: formattedDepartureDate,
        returnDate: formattedReturnDate
      }, {
        queryParams: {
          class: params.travelClass,
          numberOfAdult: params.numberOfAdult
        }
      });

    }
  }

})
;
