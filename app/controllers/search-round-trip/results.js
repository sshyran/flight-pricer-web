import { mapBy, sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['class', 'numberOfAdult'],

  sortParam: ['smallestAmount'],

  maxConnection: 0,

  filteredSolutions: computed('model.solutions', 'model.solutions.@each.segments', 'maxConnection', function () {
    let filteredSolutions = [];
    let maxConnection = parseInt(this.get('maxConnection')) + 1;
    let originalSolutions = this.get('model.solutions');
    originalSolutions.forEach(solution => {
      let allSliceMeetConnectionRequirement = true;
      solution.get('slices').forEach(slice => {
        if (slice.get('segments.length') <= maxConnection) {
          allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && true;
        } else {
          allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && false;
        }
      });
      if (allSliceMeetConnectionRequirement) {
        filteredSolutions.pushObject(solution)
      }
    });
    return filteredSolutions;
  }),

  allAirlines: mapBy('filteredSolutions', 'uniqueAirlines'),
  uniqueAirlines: computed('allAirlines.@each.uniqueAirlines', function () {
    let uniqueAirlines = [];
    this.get('allAirlines').forEach(airlines => {
      airlines.forEach(airline => {
        if (!uniqueAirlines.includes(airline)) {
          uniqueAirlines.pushObject(airline);
        }
      });
    });

    return uniqueAirlines.sort();
  }),

  sortedSolutions:
    sort('filteredSolutions', 'sortParam')
})
;
