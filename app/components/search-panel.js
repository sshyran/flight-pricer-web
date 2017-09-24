import Ember from 'ember';

export default Ember.Component.extend({

  searchMode: 'oneWay',

  isOneWay: Ember.computed.equal('searchMode','oneWay'),
  isMultiCity: Ember.computed.equal('searchMode','multiCity'),
  isRoundTrip: Ember.computed.equal('searchMode','roundTrip'),

  actions: {

    oneWaySearch() {
      this.set('searchMode', 'oneWay');
    },

    roundTripSearch() {
      this.set('searchMode', 'roundTrip');
    },

    multiCitySearch() {
      this.set('searchMode', 'multiCity')
    },

    onSearch(params) {
      this.get('onSearch')(params);
    }

  }


});
