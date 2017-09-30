import DS from 'ember-data';

export default DS.Model.extend({
  currency: DS.attr('string'),
  amount: DS.attr('number'),
  country: DS.attr('string')


});
