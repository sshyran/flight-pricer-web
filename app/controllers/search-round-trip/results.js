import {filterBy, sort} from '@ember/object/computed';
import {computed} from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['class', 'numberOfAdult'],

  sortParam: ['smallestAmount'],

  maxConnection: -1,

  selectedAirlines: filterBy('model.airlines', 'isSelected', true),

  columnWidth: [100],
  rowHeight: 260,


  filteredSolutions: computed('model.solutions', 'maxConnection', 'selectedAirlines.[]', function () {
    let filteredSolutions = [];
    let maxConnection = parseInt(this.get('maxConnection')) + 1;
    let originalSolutions = this.get('model.solutions');

    let allowedAirlines = this.get('selectedAirlines');

    originalSolutions.forEach(solution => {

      let allAirlinesAreInFilterSelection = allowedAirlines.length === 0 || solution.get('airlines').every(airline => {
        return allowedAirlines.mapBy('id').indexOf(airline.get('id')) >= 0;
      });

      if (allAirlinesAreInFilterSelection) {
        let allSliceMeetConnectionRequirement = true;
        solution.get('slices').forEach(slice => {
          if (slice.get('segments.length') <= maxConnection) {
            allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && true;
          } else {
            allSliceMeetConnectionRequirement = allSliceMeetConnectionRequirement && false;
          }
        });
        if (allSliceMeetConnectionRequirement || maxConnection === 0) {
          filteredSolutions.pushObject(solution)
        }
      }
    });
    return filteredSolutions;
  }),

  sortedSolutions:
    sort('filteredSolutions', 'sortParam')
})
;
