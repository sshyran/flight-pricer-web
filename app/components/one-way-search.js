import Component from '@ember/component';

export default Component.extend({

  departureAirport: "",
  arrivalAirport: "",
  departureDate: new Date(),
  numberOfAdult: 1,
  travelClass: "ECONOMY",
  initialTravelClass: "ECONOMY",
  minDate: new Date(),

  actions: {
    search() {
      this.get('onSearch')({
        departureAirport: this.get('departureAirport'),
        arrivalAirport: this.get('arrivalAirport'),
        departureDate: this.get('departureDate'),
        numberOfAdult: this.get('numberOfAdult'),
        travelClass: this.get('travelClass')
      });
    }
  }

});
