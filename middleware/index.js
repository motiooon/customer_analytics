/**
 * Routes Loading
 */
var fs = require('fs');
var local_exports = {};

(function () {
	var name;
	fs.readdirSync(__dirname).forEach(function (file) {
		if (file === 'index.js' || file.indexOf('.js') === -1) return;
		var name =  file.replace(/\.js$/, '');
		if (name) {
			local_exports[name] = require('./' + name);
		}
	});
})();

module.exports = local_exports;