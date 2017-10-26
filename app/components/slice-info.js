import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

  classNames: ['row', 'one-slice'],

  detailsOpen: false,

  connectionCount: computed('slice.segments.length', function () {
    return this.get('slice.segments.length') - 1;
  }),

  actions: {
    toggleDetails() {
      let detailsOpen = this.get('detailsOpen');
      this.set('detailsOpen', !detailsOpen);
    }
  }
});
