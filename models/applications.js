
/**
 * Applications schema
 */

var _ = require('underscore');

module.exports = function(server) {

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'Application',

			// Write only fields
			WRITE_FIELDS: ['name', 'API_key', 'created', 'updated'],

			// Read only fields
			READ_FIELDS: ['name', 'API_key', 'created', 'updated'],

			// Valid sort fields
			SORT_FIELDS: ['name', 'API_key', 'created', 'updated'],

			// Fields to query on
			QUERY_FIELDS: ['name', 'API_key', 'created', 'updated']

		},

		ApplicationSchema = new server.db.Schema({
			name          : {type: String},
			customer_id   : {type: String},
			API_key       : {type: String},
			meta          : {type: String},
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
	ApplicationSchema.methods.someMethod = function(argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(server.db.model(cons.MODEL_NAME, ApplicationSchema), cons);
};