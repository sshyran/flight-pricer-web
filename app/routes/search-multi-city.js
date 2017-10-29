import Route from '@ember/routing/route';

export default Route.extend({

  renderTemplate() {
    this.render();
    this.render('search/multi-city', {
      outlet: 'search-form'
    });
  }


});
