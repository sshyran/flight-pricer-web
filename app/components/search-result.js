import {filterBy, mapBy, max, min, sort} from '@ember/object/computed';
import EmberObject, {computed} from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['results'],

  solutions: [],
  airlines: [],

  sortParam: ['smallestAmount'],

  maxConnection: -1,

  selectedAirlines: filterBy('airlines', 'isSelected', true),

  columnWidth: [100],
  rowHeight: 260,

  smallestPrices: mapBy('solutions', 'smallestAmount'),

  lowestPrice: min('smallestPrices'),
  biggestPrice: max('smallestPrices'),

  priceRangeLowerBound: undefined,
  priceRangeHigherBound: undefined,


  departureTimestampsRanges: [],
  arrivalTimestampsRanges: [],

  lowestDepartureTimestamps: computed('solutions.[]', function () {
    let lowestDepartureTimes = [];
    this.get('solutions').forEach(solution => {
      let n = solution.get('slices.length');
      for (let i = 0; i < n; i++) {
        if (lowestDepartureTimes.length <= i) {
          lowestDepartureTimes.pushObject(solution.get('originDepartureTimestamps').objectAt(i));
        } else {
          if (lowestDepartureTimes[i] > solution.get('originDepartureTimestamps').objectAt(i)) {
            lowestDepartureTimes[i] = solution.get('originDepartureTimestamps').objectAt(i);
          }
        }
      }
    });
    return lowestDepartureTimes;
  }),

  latestDepartureTimestamps: computed('solutions.@each.slices', function () {
    let latestDepartureTimes = [];
    this.get('solutions').forEach(solution => {
      let n = solution.get('slices.length');
      for (let i = 0; i < n; i++) {
        if (latestDepartureTimes.length <= i) {
          latestDepartureTimes.pushObject(solution.get('originDepartureTimestamps').objectAt(i));
        } else {
          if (latestDepartureTimes[i] < solution.get('originDepartureTimestamps').objectAt(i)) {
            latestDepartureTimes[i] = solution.get('originDepartureTimestamps').objectAt(i);
          }
        }
      }
    });
    return latestDepartureTimes;
  }),

  lowestArrivalTimestamps: computed('solutions.@each.slices', function () {
    let lowestArrivalTimestamps = [];
    this.get('solutions').forEach(solution => {
      let n = solution.get('slices.length');
      for (let i = 0; i < n; i++) {
        if (lowestArrivalTimestamps.length <= i) {
          lowestArrivalTimestamps.pushObject(solution.get('destinationArrivalTimestamps').objectAt(i));
        } else {
          if (lowestArrivalTimestamps[i] > solution.get('destinationArrivalTimestamps').objectAt(i)) {
            lowestArrivalTimestamps[i] = solution.get('destinationArrivalTimestamps').objectAt(i);
          }
        }
      }
    });
    return lowestArrivalTimestamps;
  }),

  latestArrivalTimestamps: computed('solutions.@each.slices', function () {
    let latestArrivalTimestamps = [];
    this.get('solutions').forEach(solution => {
      let n = solution.get('slices.length');
      for (let i = 0; i < n; i++) {
        if (latestArrivalTimestamps.length <= i) {
          latestArrivalTimestamps.pushObject(solution.get('destinationArrivalTimestamps').objectAt(i));
        } else {
          if (latestArrivalTimestamps[i] < solution.get('destinationArrivalTimestamps').objectAt(i)) {
            latestArrivalTimestamps[i] = solution.get('destinationArrivalTimestamps').objectAt(i);
          }
        }
      }
    });
    return latestArrivalTimestamps;
  }),

  isSortByAmount: computed('sortParam.@each', function () {
    return this.get('sortParam').indexOf('smallestAmount') >= 0;
  }),

  isSortByDepartureTime: computed('sortParam.@each', function () {
    return this.get('sortParam').indexOf('slices.firstObject.originDepartureTimestamp') >= 0;
  }),

  isSortByArrivalTime: computed('sortParam.@each', function () {
    return this.get('sortParam').indexOf('slices.lastObject.destinationArrivalTimestamp') >= 0;
  }),

  isSortByDuration: computed('sortParam.@each', function () {
    return this.get('sortParam').indexOf('totalDuration') >= 0;
  }),

  filteredSolutions: computed('solutions', 'maxConnection', 'selectedAirlines.[]', 'priceRangeLowerBound', 'priceRangeHigherBound',
    'departureTimestampsRanges.@each.from', 'departureTimestampsRanges.@each.to', 'arrivalTimestampsRanges.@each.from', 'arrivalTimestampsRanges.@each.to', function () {
      let filteredSolutions = [];
      let maxConnection = parseInt(this.get('maxConnection'));
      let originalSolutions = this.get('solutions');

      let lowerPrice = this.get('priceRangeLowerBound') === undefined ? this.get('lowestPrice') : this.get('priceRangeLowerBound');
      let higherPrice = this.get('priceRangeHigherBound') === undefined ? this.get('biggestPrice') : this.get('priceRangeHigherBound');

      let allowedAirlines = this.get('selectedAirlines');

      originalSolutions.forEach(solution => {
        if (solution.get('smallestAmount') >= lowerPrice && solution.get('smallestAmount') <= higherPrice) {

          let allAirlinesAreInFilterSelection = allowedAirlines.length === 0 || solution.get('airlines').every(airline => {
            return allowedAirlines.mapBy('id').indexOf(airline.get('id')) >= 0;
          });

          if (allAirlinesAreInFilterSelection) {
            let allSliceMeetConnectionRequirement = true;
            let allSliceMeetTimeRangeCriteria = true;
            solution.get('slices').forEach((slice, index) => {
              if (slice.get('numberOfStops') <= maxConnection) {
                allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && true;
              } else {
                allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && false;
              }

              if (this.get('departureTimestampsRanges')[index] !== undefined) {
                if (slice.get('originDepartureTimestamp') >= this.get('departureTimestampsRanges')[index].get('from')) {
                  allSliceMeetTimeRangeCriteria = allSliceMeetTimeRangeCriteria && true;
                } else {
                  allSliceMeetTimeRangeCriteria = false;
                }
              }

              if (this.get('departureTimestampsRanges')[index] !== undefined) {
                if (slice.get('originDepartureTimestamp') <= this.get('departureTimestampsRanges')[index].get('to')) {
                  allSliceMeetTimeRangeCriteria = allSliceMeetTimeRangeCriteria && true;
                } else {
                  allSliceMeetTimeRangeCriteria = false;
                }
              }

              if (this.get('arrivalTimestampsRanges')[index] !== undefined) {
                if (slice.get('destinationArrivalTimestamp') >= this.get('arrivalTimestampsRanges')[index].get('from')) {
                  allSliceMeetTimeRangeCriteria = allSliceMeetTimeRangeCriteria && true;
                } else {
                  allSliceMeetTimeRangeCriteria = false;
                }
              }

              if (this.get('arrivalTimestampsRanges')[index] !== undefined) {
                if (slice.get('destinationArrivalTimestamp') <= this.get('arrivalTimestampsRanges')[index].get('to')) {
                  allSliceMeetTimeRangeCriteria = allSliceMeetTimeRangeCriteria && true;
                } else {
                  allSliceMeetTimeRangeCriteria = false;
                }
              }

            });
            if (allSliceMeetTimeRangeCriteria && (allSliceMeetConnectionRequirement || maxConnection === -1)) {
              filteredSolutions.pushObject(solution)
            }
          }
        }
      });
      return filteredSolutions;
    }),

  sortedSolutions: sort('filteredSolutions', 'sortParam'),

  actions: {
    sortByPrice() {
      this.set('sortParam', ['smallestAmount']);
    },

    sortByDepartureTime() {
      this.set('sortParam', ['slices.firstObject.originDepartureTimestamp']);
    },

    sortByArrivalTime() {
      this.set('sortParam', ['slices.lastObject.destinationArrivalTimestamp']);
    },

    sortByDuration() {
      this.set('sortParam', ['totalDuration']);
    },

    updateTimeFiltering(filterCriteria) {
      let sliceIndex = filterCriteria.sliceIndex;
      let isDeparture = filterCriteria.type === 'departure';
      let from = filterCriteria.from;
      let to = filterCriteria.to;

      if (isDeparture) {
        let departureTimestampsRanges = this.get('departureTimestampsRanges');
        departureTimestampsRanges[sliceIndex] = EmberObject.create({from: from, to: to});
        this.set('departureTimestampsRanges', departureTimestampsRanges.slice(0)); //. slice(0) is a hack to create a new array and force the computed property to fire
      } else {
        let arrivalTimestampsRanges = this.get('arrivalTimestampsRanges');
        arrivalTimestampsRanges[sliceIndex] = EmberObject.create({from: from, to: to});

        this.set('arrivalTimestampsRanges', arrivalTimestampsRanges.slice(0)); //. slice(0) is a hack to create a new array and force the computed property to fire
      }
    }

  }


});
