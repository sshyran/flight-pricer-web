import Component from '@ember/component';
import {alias} from '@ember/object/computed';
import {computed} from '@ember/object';

export default Component.extend({

  detailsOpen: false,

  cheapestPrice: alias('prices.firstObject'),

  pricesExceptCheapest: computed('prices.[]', function () {
    return this.get('prices').slice(1);
  }),

  actions: {
    toggleDetails() {
      let detailsOpen = this.get('detailsOpen');
      this.set('detailsOpen', !detailsOpen);
    }
  }
});
