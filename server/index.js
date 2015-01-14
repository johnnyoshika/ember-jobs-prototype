// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function (app) {
    var globSync = require('glob').sync;
    var bodyParser = require('body-parser');
    var mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
    var proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

    if (process.env.DISABLE_MOCK === 'true')
        return;

    app.use(bodyParser.json());

    // Log proxy requests
    var morgan = require('morgan');
    app.use(morgan('dev'));

    mocks.forEach(function (route) { route(app); });
    proxies.forEach(function (route) { route(app); });

};
