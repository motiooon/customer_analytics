var _  = require('underscore');
_.str = require('underscore.string');

module.exports = function(server){


	server.post("/events", function(req, res, next){

		var event_data = req.body;

		if(!event_data.type){return next(new restify.MissingParameterError("Please provide a type for this event"));}
		if(_.str.trim(event_data.meta).length == 0 ){return next(new restify.InvalidArgumentError("Please provide content for meta"));}
		if(!event_data.API_key){return next(new restify.MissingParameterError("Please provide an API key with your request"));}
		if(!event_data.application_name){return next(new restify.MissingParameterError("Please provide an application name for your request"));}

		var event = new Event(event_data);

		event.save(function(err){

		});

		res.send({
			status: "OK!",
			message: "Event Tracked !"
		});

	});

	server.get("/events", function(req, res, next){
		Event.findAll({}, function(err, docs){
			if(err){return next(new restify.InternalError("Something bad happened1 Could not retrieve the events"));}
		});
	});


}