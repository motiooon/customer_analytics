
/**
 * Customers schema
 */

	//TODO - to move this schema to an accounts service

var _ = require('underscore');

module.exports = function(server) {

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'Customer',

			// Write only fields
			WRITE_FIELDS: ['first_name', 'last_name', 'API_key', 'address', 'email', 'created', 'updated'],

			// Read only fields
			READ_FIELDS: ['first_name', 'last_name', 'API_key', 'address', 'email', 'created', 'updated'],

			// Valid sort fields
			SORT_FIELDS: ['first_name', 'last_name', 'API_key', 'address', 'email', 'created', 'updated'],

			// Fields to query on
			QUERY_FIELDS: ['first_name', 'last_name', 'API_key', 'address', 'email', 'created', 'updated']

		},

		CustomerSchema = new server.db.Schema({
			first_name    : {type: String},
			last_name     : {type: String},
			API_key       : {type: String},
			email         : {type: String},
			address          : {
				street: {type: String},
				city: {type: String},
				zip: {type: String},
				country: {type: String}
			},
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
	CustomerSchema.methods.someMethod = function(argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(server.db.model(cons.MODEL_NAME, CustomerSchema), cons);
};