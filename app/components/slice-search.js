import Ember from 'ember';

export default Ember.Component.extend({
  departureAirport: "",
  arrivalAirport: "",
  departureDate: new Date(),
  numberOfAdult: 1,
  travelClass: "ECONOMY",
  initialTravelClass: "ECONOMY",
  minDate: new Date(),

  travelClasses: [
    {value: "ECONOMY", text: 'Economy'},
    {value: "PREMIUM", text: 'Premium'},
    {value: "BUSINESS", text: 'Business'},
    {value: "FIRST", text: 'First'},
  ]
});
