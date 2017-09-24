import DS from 'ember-data';

export default DS.Model.extend({
  segments: DS.hasMany('segment'),
  solution: DS.belongsTo('solution')
});
