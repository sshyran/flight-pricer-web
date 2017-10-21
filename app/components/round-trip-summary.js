import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({

  outwardSlice: alias('solution.slices.firstObject'),
  returnSlice: alias('solution.slices.lastObject'),

  departureAirport: alias('outwardSlice.segments.firstObject.originAirport'),
  arrivalAirport: alias('outwardSlice.segments.lastObject.arrivalAirport'),

  outwardDepartureLocalTime: alias('outwardSlice.segments.firstObject.originLocalDepartureTime'),
  outwardArrivalLocalTime: alias('outwardSlice.segments.lastObject.destinationLocalArrivalTime'),

  returnDepartureLocalTime: alias('returnSlice.segments.firstObject.originLocalDepartureTime'),
  returnArrivalLocalTime: alias('returnSlice.segments.lastObject.destinationLocalArrivalTime'),

  outwardConnectionCount: computed('outwardSlice.segments.length', function () {
    return this.get('outwardSlice.segments.length') - 1;
  }),

  returnConnectionCount: computed('returnSlice.segments.length', function () {
    return this.get('returnSlice.segments.length') - 1;
  }),

  outwardFlights: computed('outwardSlice.segments.@each.carrierIATA', 'outwardSlice.segments.@each.number', function () {
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

  returnFlights: computed('returnSlice.segments.@each.carrierIATA', 'returnSlice.segments.@each.number', function () {
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


  outwardConnectingAirport: computed('outwardSlice.segments.@each.destinationAirport', function () {
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

  returnConnectingAirport: computed('returnSlice.segments.@each.destinationAirport', function () {
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
