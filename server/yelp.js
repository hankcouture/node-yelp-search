// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var tokens = require('./tokens.js');


var yelp = new Yelp(tokens.apiData);

// See http://www.yelp.com/developers/documentation/v2/search_api

module.exports = {
	search: function(termSearch, locationSearch, callback) {
		yelp.search({ term: termSearch, location: locationSearch, sort: 2 })
		.then(function (data) {
		  callback(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	}
}