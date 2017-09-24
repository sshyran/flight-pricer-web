import DS from 'ember-data';


export default DS.Model.extend({
  price: DS.attr('string'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice')
});
