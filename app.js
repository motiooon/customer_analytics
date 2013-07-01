var restify       = require('restify'); global.restify  = restify;
var bunyan        = require('bunyan');
var log           = bunyan.createLogger({name: "Customer Analytics"});
var spdy          = require('spdy');
var log4js        = require('log4js');
var logger        = log4js.getLogger();
var mongoose      = require('mongoose');
var env           = require('./config/env');
var redis         = require("redis"),
		client        = redis.createClient();
var middleware    = require("./middleware");
var connect       = require("connect");
var RedisStore    = require('connect-redis')(connect);

client.on("error", function (err) {
	console.log("Error " + err);
});

var server = restify.createServer({
	name                  : 'Customer Analytics API',
	version               : '1.0.0',
	log                   : log
});

/* Set DB for server*/
server.db = mongoose;

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(middleware.authorization());
server.use(middleware.call_middleware());

//server.use(connect.cookieParser());
//server.use(connect.session({ store: new RedisStore({client:client}), secret: 'keyboard$#%#$' }));
//server.use(middleware.logsessions());
server.use(restify.throttle({
	burst: 100,
	rate: 50,
	ip: true,
	overrides: {
		'127.0.0.1': {  //the ip of the server?
			rate: 0,        // unlimited
			burst: 0
		}
	}
}));
server.use(restify.conditionalRequest());

/**** Load Models ***/
require("./models").call(this, server);

/**** Load Resources - Routes  ***/
require("./resources").call(this, server);

/**** Use log4j instead of console ***/
log4js.replaceConsole();

/**** Connect to mongodb ***/
mongoose.connect(env.mongodb_hostname);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("Mongodb connected, yay!");
});


server.listen(8080, function () {
	console.log('%s listening at %s in %s mode', server.name, server.url, env.name);
});