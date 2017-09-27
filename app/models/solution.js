import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  price: DS.attr('string'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),

  allAirlines: Ember.computed.mapBy('slices', 'allAirlines')
})
;
