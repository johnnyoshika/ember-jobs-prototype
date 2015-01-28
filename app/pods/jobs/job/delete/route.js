import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        'delete': function() {
            this.modelFor(this.routeName).deleteRecord();
            this.modelFor(this.routeName).save().then(function(){
                this.transitionTo('jobs');
            }.bind(this));
        }
    }

});
