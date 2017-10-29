import EmberObject from '@ember/object';

export default EmberObject.extend({

  travelClasses: [],

  init() {
    this.set('travelClasses', [
      {value: "ECONOMY", text: 'Economy'},
      {value: "PREMIUM", text: 'Premium'},
      {value: "BUSINESS", text: 'Business'},
      {value: "FIRST", text: 'First'}
    ])
  },

  economy() {
    return {value: "ECONOMY", text: 'Economy'};
  },

  premium() {
    return {value: "PREMIUM", text: 'Premium'};
  },

  business() {
    return {value: "BUSINESS", text: 'Business'};
  },

  first() {
    return {value: "FIRST", text: 'First'};
  }
})
