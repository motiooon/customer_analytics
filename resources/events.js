var _  = require('underscore');
_.str = require('underscore.string');

module.exports = function(server){


	server.post("/events", function(req, res, next){

		var event_data = req.body;

		if(!event_data.type){return next(new restify.MissingParameterError("We need a type for this event, buddy."));}
		if(_.str.trim(event_data.meta).length == 0 ){return next(new restify.InvalidArgumentError("If you pass meta give it some content, please."));}


		var event = new Event(event_data);

		event.save(function(err){

		});

		res.send({
			status: "OK!",
			message: "Event Tracked !"
		});

	});

}