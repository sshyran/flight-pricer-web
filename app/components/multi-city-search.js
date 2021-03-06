import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  slices: [{
    departureAirport: "",
    arrivalAirport: "",
    departureDate: new Date(),
    numberOfAdult: 1,
    travelClass: "ECONOMY",
    initialTravelClass: "ECONOMY",
    minDate: new Date()
  }
  ],

  onlyOneSlice: computed('slices.[]', function () {
    return this.get('slices').length === 1;
  }),

  actions: {
    addSlice() {
      this.get('slices').pushObject({
        departureAirport: "",
        arrivalAirport: "",
        departureDate: new Date(),
        numberOfAdult: 1,
        travelClass: "ECONOMY",
        initialTravelClass: "ECONOMY",
        minDate: new Date()
      })
    },

    deleteSlice(index) {
      let slices = this.get('slices');
      if (index < slices.length) {
        slices.removeAt(index);
      }
    }
  }


});
