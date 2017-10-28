import {alias} from '@ember/object/computed';
import {computed} from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  outwardSlice: alias('solution.slices.firstObject'),
  returnSlice: alias('solution.slices.lastObject'),

  cheapestPrice: alias('solution.cheapestPrice'),

  pricesExceptCheapest: computed('solution.orderedPrices.[]', function () {
    return this.get('solution.orderedPrices').slice(1);
  })
});
