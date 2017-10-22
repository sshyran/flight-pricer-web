import Component from '@ember/component';

export default Component.extend({
  classNames: ['filter-criteria'],

  noSelection: -1,

  numberOfStops: [
    {value: -1, text: 'Any'},
    {value: 0, text: 'Direct flight'},
    {value: 1, text: 'One stop'},
    {value: 2, text: 'Two stops'},
    {value: Number.MAX_SAFE_INTEGER, text: 'Three or more stops'},
  ]
});
