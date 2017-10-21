import { mapBy, min } from '@ember/object/computed';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  prices: DS.hasMany('price'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),

  uniqueAirlines: computed('slices.@each.uniqueAirlines', function () {
    let airlines = [];
    this.get('slices').forEach(slice => {
      slice.get('uniqueAirlines').forEach(airline => {
        if (!airlines.includes(airline)) {
          airlines.pushObject(airline);
        }
      })
    });
    return airlines;
  }),


  amounts: mapBy('prices', 'requestCurrencyAmount'),
  smallestAmount: min('amounts'),
})
;
