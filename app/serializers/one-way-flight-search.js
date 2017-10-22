import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    solutions: {embedded: 'always'},
    airlines: {embedded: 'always'}
  }
});
