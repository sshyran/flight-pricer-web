import Component from '@ember/component';

export default Component.extend({
  classNames: ['filter-criteria'],

  slicesFilterCriteria: [],

  lowestDepartureTimes: [],
  latestDepartureTimes: [],

  lowestArrivalTimes: [],
  latestArrivalTimes: [],

  didReceiveAttrs() {
    this._super(...arguments);
    let lowestDepartureTimes = this.get('lowestDepartureTimes');
    let latestDepartureTimes = this.get('latestDepartureTimes');
    let lowestArrivalTimes = this.get('lowestArrivalTimes');
    let latestArrivalTimes = this.get('latestArrivalTimes');

    let numberOfSlice = lowestDepartureTimes.length;

    for (let i = 0; i < numberOfSlice; i++) {
      let sliceFilterCriteria = {
        departure: {
          from: lowestDepartureTimes[i],
          to: latestDepartureTimes[i]
        },
        arrival: {
          from: lowestArrivalTimes[i],
          to: latestArrivalTimes[i]
        }
      };

      this.get('slicesFilterCriteria').pushObject(sliceFilterCriteria);
    }

  },

  actions: {
    changeAction(data) {
      this.get('onChange')(data);
    }
  }

});
