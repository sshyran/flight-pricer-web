import {mapBy, sort, sum} from '@ember/object/computed';
import {computed} from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  prices: DS.hasMany('price'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),
  airlines: DS.hasMany('airline'),

  pricesSorting: ['requestCurrencyAmount:asc'],

  allDuration: mapBy('slices', 'duration'),
  totalDuration: sum('allDuration'),

  orderedPrices: sort('prices', 'pricesSorting'),

  smallestAmount: computed('cheapestPrice', function () {
    return this.get('cheapestPrice').get('requestCurrencyAmount');
  }),

  cheapestPrice: computed('orderedPrices.[]', function () {
    return this.get('orderedPrices').objectAt(0);
  }),

  pricesExceptCheapest: computed('orderedPrices.[]', function () {
    return this.get('orderedPrices').slice(1);
  }),

  originDepartureTimestamps: mapBy('slices','originDepartureTimestamp'),
  destinationArrivalTimestamps: mapBy('slices','destinationArrivalTimestamp')


});
