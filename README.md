Converter for physical units

Usage
-----
	var units = require('lethexa-units');

	units.LENGTH = new units.Converter(0.3048, 'm', 'ft');

	console.log('Length [ft]: ', units.LENGTH.fromSI(1)); // 0.3048
	console.log('Length [m]: ', units.LENGTH.toSI(0.3048)); // 1


Contributors
------------

* lethexa


License
-------
Copyright (c) 2015 Tim Leerhoff <tleerhof@web.de>

Licensed under MIT


