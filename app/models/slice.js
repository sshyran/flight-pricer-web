import { mapBy, uniq } from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({
  segments: DS.hasMany('segment'),

  allAirlines: mapBy('segments', 'carrierIATA'),

  uniqueAirlines: uniq('allAirlines')

});
