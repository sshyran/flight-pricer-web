import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').queryRecord('one-way-flight-search', params);

  }

});
