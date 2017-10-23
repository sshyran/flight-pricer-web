import DS from 'ember-data';
import {computed} from '@ember/object';
import {equal} from '@ember/object/computed';


export default DS.Model.extend({
  segments: DS.hasMany('segment'),
  duration: DS.attr('number'),

  originAirport: computed('segments.@each.originAirport', function () {
    return this.get('segments.firstObject.originAirport');
  }),

  destinationAirport: computed('segments.@each.destinationAirport', function () {
    return this.get('segments.lastObject.destinationAirport');
  }),

  originLocalDepartureTime: computed('segments.@each.originLocalDepartureTime', function () {
    return this.get('segments.firstObject.originLocalDepartureTime');
  }),

  destinationLocalArrivalTime: computed('segments.@each.destinationLocalArrivalTime', function () {
    return this.get('segments.lastObject.destinationLocalArrivalTime');
  }),

  direct: equal('segments.length', 1),

  numberOfStops: computed('segments.length', function () {
    return this.get('segments.length') - 1;
  }),

  connectingAirports: computed('segments.@each.originAirport', function () {
    const nbSegments = this.get('segments.length');
    let connectingAirport = [];
    let segments = this.get('segments');
    for (let i = 1; i < nbSegments; i++) {
      connectingAirport.pushObject(segments.objectAt(i).get('originAirport'));
    }
    return connectingAirport;
  })
});
