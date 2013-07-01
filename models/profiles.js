
/**
 * Profiles schema
 */

var _ = require('underscore');

module.exports = function(server) {

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'Profile',

			// Write only fields
			WRITE_FIELDS: ['email', 'external_id', 'created' , 'updated'],

			// Read only fields
			READ_FIELDS: ['email', 'external_id', 'created' , 'updated'],

			// Valid sort fields
			SORT_FIELDS: ['email', 'external_id', 'created' , 'updated'],

			// Fields to query on
			QUERY_FIELDS: ['email', 'external_id', 'created' , 'updated']

		},

		ProfileSchema = new server.db.Schema({
			email: {type: String},
			external_id: {type: String},
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
	ProfileSchema.methods.someMethod = function(argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(server.db.model(cons.MODEL_NAME, ProfileSchema), cons);
};