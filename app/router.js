import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('organization', { path: '/organizations/:org' }, function() {
    this.route('user', { path: '/users/:login' });
  });
});

export default Router;
