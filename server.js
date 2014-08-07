var express = require('express')
  , bodyParser = require('body-parser')
  , engines = require('consolidate')
  , compression = require('compression')
  , favicon = require('serve-favicon')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler')
  ;

exports.startServer = function(config, callback) {
  var app = express();

  // setup views and port
  app.set('views', config.server.views.path);
  app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
  app.set('view engine', config.server.views.extension);
  app.set('port', process.env.PORT || config.server.port || 3000);

  // middleware
  app.use(compression());
  // uncomment and point path at favicon if you have one
  // app.use(favicon("path to fav icon"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(express.static(config.watch.compiledDir));
  if (app.get('env') === 'development') {
    app.use(errorHandler());
  }

  // routes
  cachebust = ''
  if (process.env.NODE_ENV !== "production") {
    cachebust = "?b=" + (new Date()).getTime()
  }

  var routeOptions = {
    reload:    config.liveReload.enabled,
    optimize:  config.isOptimize != null ? config.isOptimize : false,
    cachebust: cachebust
  };

  var router = express.Router()
  router.get('/', function(req, res) {
    res.render('index', routeOptions);

  });

  app.use('/', router);

  // start it up
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });

  callback(server);
};