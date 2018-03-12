'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;

// configuration ===============================================================
_mongoose2.default.connect(_database2.default.mongDB); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use((0, _morgan2.default)('dev')); // log every request to the console
app.use((0, _cookieParser2.default)()); // read cookies (needed for auth)
app.use((0, _bodyParser2.default)()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use((0, _expressSession2.default)({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(_passport2.default.initialize());
app.use(_passport2.default.session()); // persistent login sessions
app.use((0, _connectFlash2.default)()); // use connect-flash for flash messages stored in session

// routes ======================================================================
// require('./app/models/routes')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);