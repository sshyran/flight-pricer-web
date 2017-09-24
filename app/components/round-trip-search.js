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
  returnTravelClass: 'ECONOMY',
  returnNumberOfAdult: 1,
  returnInitialTravelClass: 'ECONOMY',
  returnMinDate: Ember.computed.alias('outWardDepartureDate')


});
