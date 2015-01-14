import DS from 'ember-data';

export default DS.Model.extend({

    publishAt: DS.attr('date'),
    closeAt: DS.attr('date'),
    title: DS.attr('string'),
    categories: DS.attr('raw'),
    types: DS.hasMany('jobType'),
    application: DS.attr('raw')
  
});
