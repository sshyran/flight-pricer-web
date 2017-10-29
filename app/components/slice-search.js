import Component from '@ember/component';
import TravelClasses from '../utils/travel-class'

export default Component.extend({
  departureAirport: "",
  arrivalAirport: "",
  departureDate: new Date(),
  numberOfAdult: 1,
  travelClass: undefined,
  initialTravelClass: undefined,
  minDate: new Date(),

  travelClasses: undefined,


  didInsertElement() {
    this._super(...arguments);
    let travelClasses = TravelClasses.create();
    this.set('travelClasses', travelClasses.get('travelClasses'));
    this.set('travelClass', travelClasses.economy().value);
    this.set('initialTravelClass', travelClasses.economy().value);
  }

});
