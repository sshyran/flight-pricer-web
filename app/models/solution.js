import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  prices: DS.hasMany('price'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),

  uniqueAirlines: Ember.computed('slices.@each.uniqueAirlines', function () {
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


  amounts: Ember.computed.mapBy('prices', 'requestCurrencyAmount'),
  smallestAmount: Ember.computed.min('amounts'),
})
;
