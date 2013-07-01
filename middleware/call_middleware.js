module.exports = function(){
	"use strict";
	return function(req, res, next){

		var call_data = req.body;

		if(call_data.API_key){
			var call = {
				API_key: call_data.API_key,
				method: req.method,
				path: req._path
			};
			console.log(call);
		}
		next();
	};
}

