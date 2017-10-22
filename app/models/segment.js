import {alias} from '@ember/object/computed';
import {computed} from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({

  duration: DS.attr('number'),
  airline: DS.belongsTo('airline', {inverse: null}),
  number: DS.attr('string'),
  cabin: DS.attr('string'),
  bookingCode: DS.attr('string'),
  bookingCodeAvailableSeats: DS.attr('number'),
  marriedSegmentGroup: DS.attr('string'),
  connectionDuration: DS.attr('number'),
  legs: DS.hasMany('leg'),


  originAirport: computed('legs.@each.origin', 'legs.[]', function () {
    return this.get('legs.firstObject.origin');
  }),

  destinationAirport: computed('legs.@each.destination', 'legs.[]', function () {
    return this.get('legs.lastObject.destination');
  }),

  arrivalAirport: alias('destinationAirport'),

  originLocalDepartureTime: computed('legs.[]', 'legs.@each.localDepartureTime', function () {
    return this.get('legs.firstObject.localDepartureTime');
  }),

  destinationLocalArrivalTime: computed('legs.[]', 'legs.@each.localDepartureTime', function () {
    return this.get('legs.lastObject.localArrivalTime');
  }),

});
