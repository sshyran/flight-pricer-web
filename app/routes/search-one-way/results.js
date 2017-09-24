import Ember from 'ember';

/* global moment */
export default Ember.Route.extend({

  model(params) {
    let date = moment(params.departureDate, 'YYYY-MM-DD').toDate();
    let departureAirport = params.departure;
    let arrivalAirport = params.arrival;

    return {
      query: {
        date: date,
        departureAirport: departureAirport,
        arrivalAirport: arrivalAirport,

      }
    }

  }

});
