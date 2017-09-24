import DS from 'ember-data';

export default DS.Model.extend({

  duration: DS.attr('number'),
  carrierIATA: DS.attr('string'),
  number: DS.attr('string'),
  cabin: DS.attr('string'),
  bookingCode: DS.attr('string'),
  bookingCodeAvailableSeats: DS.attr('number'),
  marriedSegmentGroup: DS.attr('string'),
  connectionDuration: DS.attr('number'),
  legs: DS.hasMany('leg')

});
