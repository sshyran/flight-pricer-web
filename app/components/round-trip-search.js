import Ember from 'ember';

export default Ember.Component.extend({
  outWardDepartureAirport: "",
  outWardArrivalAirport: "",
  outWardDepartureDate: new Date(),
  outWardNumberOfAdult: 1,
  outWardTravelClass: "ECONOMY",
  outWardInitialTravelClass: "ECONOMY",
  outWardMinDate: new Date(),

  returnDepartureAirport: Ember.computed.alias('outWardArrivalAirport'),
  returnArrivalAirport: Ember.computed.alias('outWardDepartureAirport'),
  returnDepartureDate: new Date(),
  returnTravelClass: Ember.computed.alias('outWardTravelClass'),
  returnNumberOfAdult: Ember.computed.alias('outWardNumberOfAdult'),
  returnInitialTravelClass: Ember.computed.alias('outWardInitialTravelClass'),
  returnMinDate: Ember.computed.alias('outWardDepartureDate'),

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
