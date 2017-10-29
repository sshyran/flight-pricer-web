import Route from '@ember/routing/route';

export default Route.extend({

  modelHookCalled: false,

  model(params) {
    this.set('modelHookCalled', true);
    return this.get('store').queryRecord('one-way-flight-search', params);
  },

  setupController(controller, model) {
    if (!this.get('modelHookCalled')) {
      this.refresh();
    }
    controller.set('model', model);
    this.set('modelHookCalled', false);
  }

});
