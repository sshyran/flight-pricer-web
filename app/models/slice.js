import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  segments: DS.hasMany('segment'),

  allAirlines: Ember.computed.mapBy('segments', 'carrierIATA'),

  uniqueAirlines: Ember.computed.uniq('allAirlines')

});
