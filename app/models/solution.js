import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  price: DS.attr('string'),
  refundable: DS.attr('boolean'),
  slices: DS.hasMany('slice'),

  uniqueAirlines: Ember.computed('slices.@each.uniqueAirlines', function () {
    let airlines = [];
    this.get('slices').forEach(slice => {
      slice.get('uniqueAirlines').forEach(airline => {
        if (!airlines.includes(airline)) {
          airlines.pushObject(airline);
        }
      })
    });
    return airlines;
  }),

  currency: Ember.computed('price', function () {
    return this.get('price').substr(0, 3);
  }),

  amount: Ember.computed('price', function () {
    return parseFloat(this.get('price').substr(3));
  }),
})
;
