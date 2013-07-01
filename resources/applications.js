var hat = require('hat');
var _ = require("underscore");

module.exports = function(server){

	server.post("/applications", function(req, res, next){

		var application_data = req.body;

		//TODO put some validation before saving to db

		var id = hat();
		_.extend(application_data, {
			API_key: id
		});

		var applic = new Application(application_data);

		applic.save(function(err){

			if(err){
				return next(new restify.InternalError("Could not create an application. Please retry."));
			}

			res.send({
				status: "OK!",
				message: "Application Created",
				application: applic
			});

		});



	});


};