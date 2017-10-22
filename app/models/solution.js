import {mapBy, min} from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({
  prices: DS.hasMany('price'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),
  airlines: DS.hasMany('airline'),

  amounts: mapBy('prices', 'requestCurrencyAmount'),
  smallestAmount: min('amounts'),

});
