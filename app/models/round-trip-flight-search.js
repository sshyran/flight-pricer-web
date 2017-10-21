import { computed } from '@ember/object';
import { mapBy } from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({

  origin: DS.attr('string'),
  destination: DS.attr('string'),
  departureDate: DS.attr('date'),
  returnDate: DS.attr('date'),
  numberOfAdults: DS.attr('number'),
  cabin: DS.attr('string'),

  solutions: DS.hasMany('solution'),


  allAirlines: mapBy('solutions', 'uniqueAirlines'),
  uniqueAirlines: computed('allAirlines.[]', function () {
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
