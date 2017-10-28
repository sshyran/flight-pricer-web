import Component from '@ember/component';

export default Component.extend({
  classNames: ['filter-criteria'],

  lowestPrice: undefined,
  biggestPrice: undefined,

  initialRange: [],
  range: {},

  didReceiveAttrs() {
    this._super(...arguments);
    let lowerPrice = parseInt(this.get('lowestPrice'));
    let higherPrice = parseInt(this.get('biggestPrice')) + 1;
    this.set('initialRange', [lowerPrice, higherPrice]);
    this.set('range', {min: [lowerPrice], max: [higherPrice]});
  },

  actions: {
    changeAction(data) {
      this.get('onPriceRangeLowerBoundChange')(data[0]);
      this.get('onPriceRangeHigherBoundChange')(data[1]);
    }
  }

})
;
