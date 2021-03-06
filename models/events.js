
/**
 * Events schema
 */

var _ = require('underscore');

module.exports = function(server) {

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'Event',

			// Write only fields
			WRITE_FIELDS: ['type', 'user_id', 'created', 'meta', 'last_modified'],

			// Read only fields
			READ_FIELDS: ['type', 'user_id', 'created', 'meta', 'last_modified'],

			// Valid sort fields
			SORT_FIELDS: ['type', 'user_id', 'created', 'meta', 'last_modified'],

			// Fields to query on
			QUERY_FIELDS: ['type', 'user_id', 'created','meta', 'last_modified']

		},

		EventSchema = new server.db.Schema({
			type          : {type: String},
			user_id       : {type: String},
			meta          : {type: String},
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
	EventSchema.methods.someMethod = function(argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(server.db.model(cons.MODEL_NAME, EventSchema), cons);
};