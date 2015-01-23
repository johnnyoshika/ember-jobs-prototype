import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return this.store.createRecord('job');
    },

    actions: {
        save: function() {
            this.modelFor(this.routeName).save().then(function (model) {
                this.transitionTo('jobs.job', model);
            }.bind(this));
        }
    }

});
