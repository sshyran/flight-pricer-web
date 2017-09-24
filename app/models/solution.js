import DS from 'ember-data';


export default DS.Model.extend({
  price: DS.attr('string'),
  slices: DS.hasMany('slice')
});
