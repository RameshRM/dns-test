'use strict';

var dns = require('dns');

var path = require('path');
var config = require('./config');


startLookup(config.lookup);

function startLookup(lookup) {
	console.log(lookup);
	var lookupHosts = Object.keys(lookup);
	var ipFamily = 4;

	setInterval(function () {
		lookupHosts.forEach(function (host) {
			dns.lookup(lookup[host].hostname, ipFamily, function (err, result) {
				console.log(result, err);
			});
		});
	}, 1000);
}
