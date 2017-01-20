//boss on server
var logger = require('morgan');
var express = require('express');//server side

//var path=require('path');
//var cookieParser=require('cookie-parser');
//var serssion=require('cookie-session');
// var expressValidater=require('express-validater');
//var flash=require('connect-flash');
//var session=require('express-session');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

var movies = require('./routes/movie-crud');//var routes = require('./routes/movie-crud');both are accepted
var city = require('./routes/city-crud');
var theatre = require('./routes/theatre-crud');
var time = require('./routes/time-crud');
var assignmovie = require('./routes/assignmovie-crud');
var authentication = require('./routes/auth');

var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//app.use('/', authentication);
app.use('/movie',movies);  //app.use('/movie', routes);movies from movie-crud
app.use('/city',city);  //same as above
app.use('/theatre',theatre);
app.use('/time',time);
app.use('/assignmovie',assignmovie);
//app.use('/seat',seat);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


var mongo = require('mongodb');
var mongoose = require('mongoose');//mongoose is schema.is intermediater which understand express and gives to mongodb.mongoose is ORM
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);//if app uses only one db,use this

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

// var app = express();
// app.use(logger('dev'));
// app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());

// Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

// Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;
//
//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// Connect Flash
//app.use(flash());

// Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });


//app.set('view engine', 'html');
//app.use(express.static(path.join(__dirname, 'public')));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// configure passport
// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



// Only load this middleware in dev mode (important).
// error handlers
if (app.get('env') === 'development') {
  // app.use(function(err, req, res, next) {
  //   res.status(err.status || 500);
  //   res.render('error', {
  //     message: err.message,
  //     error: err
  //   });
  // });

  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


var server = app.listen(10000, function () {
  console.log('listening on port 10000');
});
