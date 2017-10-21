import { alias } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  outwardSlice: alias('solution.slices.firstObject'),
  returnSlice: alias('solution.slices.lastObject'),

  activeTab: 'summary',


  actions: {
    showSummary() {
      this.set('activeTab', 'summary');
    },

    showOutward() {
      this.set('activeTab', 'outward');
    },

    showReturn() {
      this.set('activeTab', 'return');
    }

  }
});
