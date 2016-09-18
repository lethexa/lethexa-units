lethexa-units
-------------

This library contains converters for physical units.

Build
-----

	npm install
	grunt


Usage
-----
	var units = require('lethexa-units');

	units.LENGTH = new units.Converter(0.3048, 4, 'm', 'ft');

	console.log('Length [ft]: ', units.LENGTH.fromSI(1)); // 0.3048
	console.log('Length [m]: ', units.LENGTH.toSI(0.3048)); // 1

License
-------

This library is published under MIT-license.



