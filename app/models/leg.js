import DS from 'ember-data';

export default DS.Model.extend({
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  aircraft: DS.attr('string'),
  localDepartureTime: DS.attr('date'),
  localArrivalTime: DS.attr('date'),
  duration: DS.attr('number'),
  operationDisclosure: DS.attr('string'),
  connectionDuration: DS.attr('number'),
  changePlane: DS.attr('boolean'),

  segment: DS.belongsTo('segment'),
});
