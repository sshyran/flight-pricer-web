import { equal } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({

  searchMode: 'oneWay',

  isOneWay: equal('searchMode','oneWay'),
  isMultiCity: equal('searchMode','multiCity'),
  isRoundTrip: equal('searchMode','roundTrip'),

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
