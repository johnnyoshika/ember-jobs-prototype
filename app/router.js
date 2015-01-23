import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('jobs', function() {
        this.route('job', {path: ':job_id'}, function() {
          this.route('edit');
          this.route("delete");
        });
        this.route("new");
    });
    this.route('job-types');
});

export default Router;
