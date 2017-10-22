import {filterBy, mapBy, max, min, sort} from '@ember/object/computed';
import {computed} from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['class', 'numberOfAdult'],

  sortParam: ['smallestAmount'],

  maxConnection: -1,
  selectedAirlines: filterBy('model.airlines', 'isSelected', true),

  columnWidth: [100],
  rowHeight: 260,

  smallestPrices: mapBy('model.solutions', 'smallestAmount'),

  lowestPrice: min('smallestPrices'),
  biggestPrice: max('smallestPrices'),

  priceRangeLowerBound: undefined,
  priceRangeHigherBound: undefined,


  filteredSolutions: computed('model.solutions', 'maxConnection', 'selectedAirlines.[]', 'priceRangeLowerBound', 'priceRangeHigherBound', function () {
    let filteredSolutions = [];
    let maxConnection = parseInt(this.get('maxConnection')) + 1;
    let originalSolutions = this.get('model.solutions');

    let allowedAirlines = this.get('selectedAirlines');

    let lowerPrice = this.get('priceRangeLowerBound') === undefined ? this.get('lowestPrice') : this.get('priceRangeLowerBound');
    let higherPrice = this.get('priceRangeHigherBound') === undefined ? this.get('biggestPrice') : this.get('priceRangeHigherBound');

    originalSolutions.forEach(solution => {
      if (solution.get('smallestAmount') >= lowerPrice && solution.get('smallestAmount') <= higherPrice) {
        let allAirlinesAreInFilterSelection = allowedAirlines.length === 0 || solution.get('airlines').every(airline => {
          return allowedAirlines.mapBy('id').indexOf(airline.get('id')) >= 0;
        });

        if (allAirlinesAreInFilterSelection) {
          solution.get('slices').forEach(slice => {
            if (slice.get('segments.length') <= maxConnection || maxConnection === 0) {
              filteredSolutions.pushObject(solution)
            }
          });
        }
      }
    });

    return filteredSolutions;
  }),

  sortedSolutions: sort('filteredSolutions', 'sortParam')


});
