module.exports = function(){
	"use strict";
	return function(req, res, next){
		if(req.authorization.basic){
			var username = req.authorization.basic.username;
			var password = req.authorization.basic.password;
			console.log("request authorized with: ", username, " and ", password);
		}
		next();
	};
};

