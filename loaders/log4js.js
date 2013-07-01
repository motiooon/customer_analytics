module.exports = function(server){
	var log4js = require('log4js');
	log4js.replaceConsole();
	var logger = log4js.getLogger();
}