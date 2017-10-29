import Route from '@ember/routing/route';

export default Route.extend({

  renderTemplate() {
    this.render();
    this.render('search/round-trip', {
      outlet: 'search-form'
    });
  }


});
