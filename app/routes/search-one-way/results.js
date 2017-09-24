import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let model = this.get('store').queryRecord('one-way-flight-search', params);
    console.log(model.get('solutions'));
    return model;

  }

});
