import Component from '@ember/component';
import TravelClasses from '../utils/travel-class'

export default Component.extend({
  outWardDepartureAirport: "",
  outWardArrivalAirport: "",

  outWardDepartureDate: new Date(),
  returnDepartureDate: new Date(),

  outWardMinDate: new Date(),

  numberOfAdult: 1,
  travelClass: undefined,
  initialTravelClass: undefined,
  travelClasses: [],

  didInsertElement() {
    this._super(...arguments);
    let travelClasses = TravelClasses.create();
    this.set('travelClasses', travelClasses.get('travelClasses'));
    this.set('travelClass', travelClasses.economy().value);
    this.set('initialTravelClass', travelClasses.economy().value);
  },

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
