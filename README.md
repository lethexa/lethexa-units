Converter for physical units

Usage
-----
	var units = require('lethexa-units');

        units.LENGTH.setFactorToSI(2.0);

	console.log('Length: ', units.LENGTH.fromSI(10));
	console.log('Length: ', units.LENGTH.toSI(10));


Contributors
------------

* lethexa


License
-------
Copyright (c) 2015 Tim Leerhoff <tleerhof@web.de>

Licensed under MIT


