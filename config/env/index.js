var envious = require('envious');

envious.development = require("./dev.js");
envious.qa = require("./qa.js");
envious.production = require("./prod.js");

envious.default_env = "development";

var env = envious.apply();
module.exports = env;