import Component from '@ember/component';
import {sort} from '@ember/object/computed'

export default Component.extend({
  classNames: ['filter-criteria'],
  sortParam: ['name'],

  sortedAirlines: sort('airlines', 'sortParam')
});
