import Ember from 'ember';

export default Ember.Component.extend({

  outwardSlice: Ember.computed.alias('solution.slices.firstObject'),
  returnSlice: Ember.computed.alias('solution.slices.lastObject'),

  departureAirport: Ember.computed.alias('outwardSlice.segments.firstObject.originAirport'),
  arrivalAirport: Ember.computed.alias('outwardSlice.segments.lastObject.arrivalAirport'),

  outwardDepartureLocalTime: Ember.computed.alias('outwardSlice.segments.firstObject.originLocalDepartureTime'),
  outwardArrivalLocalTime: Ember.computed.alias('outwardSlice.segments.lastObject.destinationLocalArrivalTime'),

  returnDepartureLocalTime: Ember.computed.alias('returnSlice.segments.firstObject.originLocalDepartureTime'),
  returnArrivalLocalTime: Ember.computed.alias('returnSlice.segments.lastObject.destinationLocalArrivalTime'),

  outwardConnectionCount: Ember.computed('outwardSlice.segments.length', function () {
    return this.get('outwardSlice.segments.length') - 1;
  }),

  returnConnectionCount: Ember.computed('returnSlice.segments.length', function () {
    return this.get('returnSlice.segments.length') - 1;
  }),

  outwardFlights: Ember.computed('outwardSlice.segments.@each.carrierIATA', 'outwardSlice.segments.@each.number', function () {
    let outwardFlights = "";
    let segments = this.get('outwardSlice.segments');

    segments.forEach(segment => {
      outwardFlights += segment.get('carrierIATA');
      outwardFlights += " ";
      outwardFlights += segment.get('number');
      outwardFlights += ", ";
    });
    return outwardFlights.substr(0, outwardFlights.length - 2);
  }),

  returnFlights: Ember.computed('returnSlice.segments.@each.carrierIATA', 'returnSlice.segments.@each.number', function () {
    let outwardFlights = "";
    let segments = this.get('returnSlice.segments');

    segments.forEach(segment => {
      outwardFlights += segment.get('carrierIATA');
      outwardFlights += " ";
      outwardFlights += segment.get('number');
      outwardFlights += ", ";
    });
    return outwardFlights.substr(0, outwardFlights.length - 2);
  }),


  outwardConnectingAirport: Ember.computed('outwardSlice.segments.@each.destinationAirport', function () {
    let arrivalAirport = "";
    let segments = this.get('outwardSlice.segments');
    let segmentCount = segments.get('length');
    if (segmentCount === 1) {
      return "";
    }

    for (let i = 0; i < segmentCount - 1; i++) {
      arrivalAirport += segments.objectAt(i).get('destinationAirport');
      arrivalAirport += ", ";
    }
    return arrivalAirport.substr(0, arrivalAirport.length - 2);
  }),

  returnConnectingAirport: Ember.computed('returnSlice.segments.@each.destinationAirport', function () {
    let arrivalAirport = "";
    let segments = this.get('returnSlice.segments');
    let segmentCount = segments.get('length');
    if (segmentCount === 1) {
      return "";
    }

    for (let i = 0; i < segmentCount - 1; i++) {
      arrivalAirport += segments.objectAt(i).get('destinationAirport');
      arrivalAirport += ", ";
    }
    return arrivalAirport.substr(0, arrivalAirport.length - 2);
  }),

});
