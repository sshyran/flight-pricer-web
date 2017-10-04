import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('search-round-trip', {path: '/round-trip'}, function () {
    this.route('results', {path: '/:departure/:arrival/:departureDate/:returnDate'});
  });
  this.route('search-one-way', {path: '/one-way'}, function () {
    this.route('results', {path: '/:departure/:arrival/:departureDate'});
  });
  this.route('search-multi-city', {path: '/multi-city'});
  this.route('about');
});

export default Router;
