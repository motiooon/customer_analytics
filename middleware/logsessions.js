module.exports = function(){
	"use strict";
	return function(req, res, next){
		console.log("req.cookie: ", req.cookies);
		next();
	};
};

