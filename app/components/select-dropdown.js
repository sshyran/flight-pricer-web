import Ember from 'ember';

export default Ember.Component.extend({
  content: null,
  selectedValue: null,
  selectedValueText: null,

  init() {
    this._super(...arguments);
    let content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
  },

  actions: {
    change() {
      const changeAction = this.get('action');
      const selectedEl = this.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      const content = this.get('content');
      const selectedValue = content[selectedIndex].value;
      const selectedValueText = content[selectedIndex].text;

      this.set('selectedValue', selectedValue);
      this.set('selectedValueText', selectedValueText);
      changeAction(selectedValue);
    }
  }

});
