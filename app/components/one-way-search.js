import Component from '@ember/component';
import TravelClasses from '../utils/travel-class'

export default Component.extend({

  departureAirport: "",
  arrivalAirport: "",
  departureDate: new Date(),
  numberOfAdult: 1,
  numberOfChildren: 0,
  minDate: new Date(),

  travelClass: undefined,
  initialTravelClass: undefined,

  travelClasses: undefined,

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
        departureAirport: this.get('departureAirport'),
        arrivalAirport: this.get('arrivalAirport'),
        departureDate: this.get('departureDate'),
        numberOfAdult: this.get('numberOfAdult'),
        travelClass: this.get('travelClass'),
        numberOfChildren: this.get('numberOfChildren')
      });
    }
  }

});
