import Ember from 'ember';

export default Ember.Route.extend({

  modelHookCalled: false,

  model(params) {
    this.set('modelHookCalled', true);
    return this.get('store').queryRecord('round-trip-flight-search', params);
  },

  setupController(controller, model) {
    if (!this.get('modelHookCalled')) {
      this.refresh();
    }
    controller.set('model', model);
    this.set('modelHookCalled', false);
  }

});
