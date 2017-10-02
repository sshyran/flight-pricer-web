import Ember from 'ember';

export default Ember.Component.extend({
  outwardSlice: Ember.computed.alias('solution.slices.firstObject'),
  returnSlice: Ember.computed.alias('solution.slices.lastObject'),

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
