var assert = require("assert");
var units = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'units');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});

describe('units', function () {
    describe('#toSI()', function () {
        it('should convert SI value from other', function () {

            units.LENGTH = new units.Converter(2.0, 'm', 'x');

            assert.equal(2.0, units.LENGTH.toSI(1.0));
        });
    });

    describe('#fromSI()', function () {
        it('should convert SI value to other', function () {

            units.LENGTH = new units.Converter(2.0, 'm', 'x');

            assert.equal(1.0, units.LENGTH.fromSI(2.0));
        });
    });

    describe('#asString()', function () {
        it('should generate a unit-string from the value', function () {

            units.LENGTH = new units.Converter(2.0, 'm', 'x');

            assert.equal('1x', units.LENGTH.asString(2.0));
        });
    });

    describe('#asStringSI()', function () {
        it('should generate an SI-unit-string from the value', function () {

            units.LENGTH = new units.Converter(2.0, 'm', 'x');

            assert.equal('2m', units.LENGTH.asStringSI(1.0));
        });
    });
});



