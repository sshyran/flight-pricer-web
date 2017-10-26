import DS from 'ember-data';
import {computed} from '@ember/object';
import {equal} from '@ember/object/computed';
import moment from 'moment';

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

  originalDepartureTimestamp: computed('originLocalDepartureTime', function () {
    let originLocalDepartureTime = this.get('originLocalDepartureTime');
    return moment(originLocalDepartureTime).unix();
  }),

  destinationLocalArrivalTime: computed('segments.@each.destinationLocalArrivalTime', function () {
    return this.get('segments.lastObject.destinationLocalArrivalTime');
  }),

  destinationArrivalTimestamp: computed('destinationLocalArrivalTime', function () {
    let destinationLocalArrivalTime = this.get('destinationLocalArrivalTime');
    return moment(destinationLocalArrivalTime).unix();
  }),

  direct: equal('segments.length', 1),

  numberOfStops: computed('segments.length', function () {
    return this.get('segments.length') - 1;
  }),

  displayFriendlySegments: computed('segments.[]', function () {
    let ret = [];

    const segmentsLength = this.get('segments.length');

    const _this = this;
    for (let i = 0; i < segmentsLength; i++) {
      let segment = _this.get('segments').objectAt(i);

      let nextDepartureFromArrivalLocation = undefined;
      if (i < segmentsLength - 1) {
        nextDepartureFromArrivalLocation = _this.get('segments').objectAt(i + 1).get('originLocalDepartureTime');
      }

      let friendlySegment = {
        originAirport: segment.get('originAirport'),
        destinationAirport: segment.get('destinationAirport'),
        originLocalDepartureTime: segment.get('originLocalDepartureTime'),
        destinationLocalArrivalTime: segment.get('destinationLocalArrivalTime'),
        nextDepartureFromArrivalLocation: nextDepartureFromArrivalLocation,
        connectionDuration: segment.get('connectionDuration')

      };

      ret.push(friendlySegment);

    }


    return ret;
  })
});
