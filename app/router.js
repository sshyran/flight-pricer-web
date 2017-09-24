import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search-round-trip', {path: '/round-trip'});
  this.route('search-one-way', {path: '/one-way'});
  this.route('search-multi-city', {path: '/multi-city'});
});

export default Router;
