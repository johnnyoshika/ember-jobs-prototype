import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('job', params.job_id).then(function(job){

            // checking for categories to see if we only have a partially loaded model
            if (job.get('categories'))
                return job;
            else
                return job.reload();

        });
    }
});
