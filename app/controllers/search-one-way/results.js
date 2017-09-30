import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['class', 'numberOfAdult'],

  sortParam: ['amount'],

  sortedSolutions: Ember.computed.sort('model.solutions','sortParam')


});
