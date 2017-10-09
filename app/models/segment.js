import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  duration: DS.attr('number'),
  carrierIATA: DS.attr('string'),
  number: DS.attr('string'),
  cabin: DS.attr('string'),
  bookingCode: DS.attr('string'),
  bookingCodeAvailableSeats: DS.attr('number'),
  marriedSegmentGroup: DS.attr('string'),
  connectionDuration: DS.attr('number'),
  legs: DS.hasMany('leg'),


  originAirport: Ember.computed('legs.@each.origin', 'legs.[]', function () {
    return this.get('legs.firstObject.origin');
  }),

  destinationAirport: Ember.computed('legs.@each.destination', 'legs.[]', function () {
    return this.get('legs.lastObject.destination');
  }),

  arrivalAirport: Ember.computed.alias('destinationAirport'),

  originLocalDepartureTime: Ember.computed('legs.[]', 'legs.@each.localDepartureTime', function () {
    return this.get('legs.firstObject.localDepartureTime');
  }),

  destinationLocalArrivalTime: Ember.computed('legs.[]', 'legs.@each.localDepartureTime', function () {
    return this.get('legs.lastObject.localArrivalTime');
  })

});
