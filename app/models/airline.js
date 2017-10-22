import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  isSelected: DS.attr('boolean', {defaultValue: false})

});
