import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  origin: DS.attr('string'),
  destination: DS.attr('string'),
  departureDate: DS.attr('date'),
  returnDate: DS.attr('date'),
  numberOfAdults: DS.attr('number'),
  cabin: DS.attr('string'),

  solutions: DS.hasMany('solution'),


  allAirlines: Ember.computed.mapBy('solutions', 'uniqueAirlines'),
  uniqueAirlines: Ember.computed('allAirlines.[]', function () {
    let uniqueAirlines = [];
    this.get('allAirlines').forEach(airlines => {
      airlines.forEach(airline => {
        if (!uniqueAirlines.includes(airline)) {
          uniqueAirlines.pushObject(airline);
        }
      });
    });

    return uniqueAirlines.sort();
  }),

});
