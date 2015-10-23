/* global exports */

(function(exports) {
  'use strict';

  exports.Converter = function(factorToSI, unitNameSI, unitName) {
    var self = this;

    this.toSI = function(value) {
      return value * factorToSI;
    };

    this.fromSI = function(value) {
      return value / factorToSI;
    };

    this.getUnitNameSI = function() {
      return unitNameSI;
    };

    this.getUnitName = function() {
      return unitName; 
    };

    this.asStringSI = function(value) {
      return '' + self.toSI(value) + unitNameSI;
    };

    this.asString = function(value) {
      return '' + self.fromSI(value) + unitName;
    };
  };

  exports.NONE = new exports.Converter(1.0, '', '');
  exports.PERCENT = new exports.Converter(0.01, '', '%');
  exports.LATITUDE = new exports.Converter(1.0, '°', '°');
  exports.LONGITUDE = new exports.Converter(1.0, '°', '°');
  exports.AREA = new exports.Converter(1.0, 'm²', 'm²');
  exports.ACCEL = new exports.Converter(1.0, 'm/s²', 'm/s²');
  exports.SPEED = new exports.Converter(1.0, 'm/s', 'm/s');
  exports.DISTANCE = new exports.Converter(1.0, 'm', 'm');
  exports.ROTACCEL = new exports.Converter(1.0, 'rad/s²', 'rad/s²');
  exports.ROTSPEED = new exports.Converter(1.0, 'rad/s', 'rad/s');
  exports.DIRECTION = new exports.Converter(Math.PI / 180.0, 'rad', '°');
  exports.PRESSURE = new exports.Converter(1.0, 'hPa', 'hPa');
  exports.ALTITUDE = new exports.Converter(1.0, 'm', 'm');
  exports.DIAMETER = new exports.Converter(1.0, 'm', 'm');
  exports.RADIUS = new exports.Converter(1.0, 'm', 'm');
  exports.LENGTH = new exports.Converter(1.0, 'm', 'm');
  exports.FREQUENCY = new exports.Converter(1.0, 'Hz', 'Hz');
  exports.POWER = new exports.Converter(1.0, 'W', 'W');
  exports.WEIGHT = new exports.Converter(1.0, 'kg', 'kg');
  exports.RELTIME = new exports.Converter(1.0, 's', 's');
  exports.ABSTIME = new exports.Converter(1.0, 's', 's');

/*
    TEMPERATURE(new TemperatureDegreesUnitConversion()),
*/





})(typeof exports === 'undefined'? this.units={}: exports);


