import Component from '@ember/component';
import {computed} from '@ember/object';
import moment from 'moment';


export default Component.extend({
  classNames: ['time-slider'],
  initialRange: [],
  range: {},
  from: undefined,
  to: undefined,
  sliceIndex: undefined,
  type: undefined,
  title: undefined,

  fromMoment: computed('from', function () {
    return moment.unix(this.get('from'));
  }),

  toMoment: computed('to', function () {
    return moment.unix(this.get('to'));
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    let from = parseInt(this.get('min'));
    let to = parseInt(this.get('max'));

    this.set('initialRange', [from, to]);
    this.set('range', {min: [from], max: [to]});
    this.set('from', from);
    this.set('to', to);

  },

  actions: {
    changeAction(range) {
      this.set('from', range[0]);
      this.set('to', range[1]);
      let data = {type: this.get('type'), sliceIndex: this.get('index'), from: range[0], to: range[1]};
      this.get('onRangeChange')(data);
    }
  }
});
