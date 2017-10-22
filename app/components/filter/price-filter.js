import Component from '@ember/component';

export default Component.extend({
  classNames: ['filter-criteria'],

  lowestPrice: undefined,
  biggestPrice: undefined,

  priceRangeLowerBound: undefined,
  priceRangeHigherBound: undefined,


  didInsertElement() {
    this._super(...arguments);

    let lowerPrice = this.get('lowestPrice');
    let higherPrice = this.get('biggestPrice');
    this.set('priceRangeLowerBound', lowerPrice);
    this.set('priceRangeHigherBound', higherPrice)
  }

});
