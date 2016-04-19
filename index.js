'use strict';

var dns = require('dns');
var confit = require('confit');
var path = require('path');

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

var options = {
	basedir: path.join(__dirname, 'config')
}
confit(options).create(function create(err, config) {
	console.log(config.get('lookup'));
	startLookup(config.get('lookup'));
});
