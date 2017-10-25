import Component from '@ember/component';
import {alias} from '@ember/object/computed';
import {computed} from '@ember/object';

export default Component.extend({

  cheapestPrice: alias('prices.firstObject'),

  pricesExceptCheapest: computed('prices.[]', function () {
    return this.get('prices').slice(1);
  })
});
