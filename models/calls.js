
/**
 * Calls schema
 */

var _ = require('underscore');

module.exports = function(server) {

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'Calls',

			// Write only fields
			WRITE_FIELDS: ['type', 'API_key', 'created', 'last_modified'],

			// Read only fields
			READ_FIELDS: ['type', 'API_key', 'created', 'last_modified'],

			// Valid sort fields
			SORT_FIELDS: ['type', 'API_key', 'created', 'last_modified'],

			// Fields to query on
			QUERY_FIELDS: ['type', 'API_key', 'created', 'last_modified']

		},

		CallsSchema = new server.db.Schema({
			type          : {type: String},
			API_key       : {type: String},
			application_name       : {type: String},
			created: {
				type: Date,
				'default': Date.now
			},
			last_modified: {
				type: Date,
				'default': Date.now
			}
		});

	// PROTOTYPE METHODS
	CallsSchema.methods.someMethod = function(argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(server.db.model(cons.MODEL_NAME, CallsSchema), cons);
};