import Component from '@ember/component';

export default Component.extend({

  classNames: ['row'],

  detailsOpen: false,

  actions: {
    toggleDetails() {
      let detailsOpen = this.get('detailsOpen');
      this.set('detailsOpen', !detailsOpen);
    }
  }
});
