var jobsFixture = require('./fixtures/jobs.json');
var jobTypesFixture = require('./fixtures/jobTypes.json');

module.exports = function (app) {
    var express = require('express');
    var jobsRouter = express.Router();

    jobsRouter.get('/', function (req, res) {
        res.send({
            jobs: jobsFixture,
            jobTypes: jobTypesFixture
        });
    });

    jobsRouter.post('/', function (req, res) {

        var job = req.body.job;
        job.id = new Date().getTime();

        res.status(201).send({
            job: job,
            jobTypes: jobTypesFixture
        });
    });

    jobsRouter.get('/:id', function (req, res) {
        res.send({
            job: jobsFixture[req.params.id - 1],
            jobTypes: jobTypesFixture
        });
    });

    jobsRouter.put('/:id', function (req, res) {
        
        var job = req.body.job;
        job.id = req.params.id;

        res.send({
            job: job,
            jobTypes: jobTypesFixture
        });
    });

    jobsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/jobs', jobsRouter);
};
