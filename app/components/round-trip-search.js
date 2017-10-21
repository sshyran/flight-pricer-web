import { alias } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  outWardDepartureAirport: "",
  outWardArrivalAirport: "",
  outWardDepartureDate: new Date(),
  outWardNumberOfAdult: 1,
  outWardTravelClass: "ECONOMY",
  outWardInitialTravelClass: "ECONOMY",
  outWardMinDate: new Date(),

  returnDepartureAirport: alias('outWardArrivalAirport'),
  returnArrivalAirport: alias('outWardDepartureAirport'),
  returnDepartureDate: new Date(),
  returnTravelClass: alias('outWardTravelClass'),
  returnNumberOfAdult: alias('outWardNumberOfAdult'),
  returnInitialTravelClass: alias('outWardInitialTravelClass'),
  returnMinDate: alias('outWardDepartureDate'),

  actions: {
    search() {
      this.get('onSearch')({
        departureAirport: this.get('outWardDepartureAirport'),
        arrivalAirport: this.get('outWardArrivalAirport'),
        departureDate: this.get('outWardDepartureDate'),
        returnDate: this.get('returnDepartureDate'),
        numberOfAdult: this.get('outWardNumberOfAdult'),
        travelClass: this.get('travelClass')
      });
    }
  }


});
