/* global exports */

(function(exports) {
  'use strict';

  exports.GRAVITY = 9.81;
  exports.LIGHTSPEED = 299792458;
  exports.SNDSPEED_WATER = 1400.0;
  exports.SNDSPEED_AIR = 333.0;
  exports.BOLTZMANN_CONST = 1.380650524e-23;
  exports.MIN_TEMP_DEG = -273.15;
  exports.METERS_PER_FOOT = 0.3048;
  exports.METERS_PER_NAUTMILE = 1852.0;
  exports.HOUR_TO_SECS = 3600.0;
  exports.ASTRONOMICAL_UNIT = 149597870691.0; // [m]


  /**
   * Converter class for converting to and from SI-units.
   * @class Converter
   * @param factorToSI {Number} The conversion factor to SI-units.
   * @param frac {Number} The size of the fractional part.
   * @param unitNameSI {String} The name of the unit in SI system (e.g. meters).
   * @param unitName {String} The name of the unit in non-SI system (e.g. feet).
   */
  exports.Converter = function(factorToSI, frac, unitNameSI, unitName) {
    var self = this;

    /**
     * Converts the given value from other units to SI-units.
     * @method toSI
     * @param value {Number} The value to convert.
     * @return The value in SI-units.
     */
    this.toSI = function(value) {
      return value * factorToSI;
    };

    /**
     * Converts the given value from SI-units to other units.
     * @method fromSI
     * @param value {Number} The value to convert.
     * @return The value in non-SI-units.
     */
    this.fromSI = function(value) {
      return value / factorToSI;
    };

    /**
     * Returns the units name in SI system.
     * @method getUnitNameSI
     * @return The units name in SI system.
     */
    this.getUnitNameSI = function() {
      return unitNameSI;
    };

    /**
     * Returns the units name in non-SI system.
     * @method getUnitName
     * @return The units name in non-SI system.
     */
    this.getUnitName = function() {
      return unitName; 
    };

    /**
     * Returns the given value as SI-unit-string e.g. '10m'.
     * @method asStringSI
     * @return The given value as string.
     */
    this.asStringSI = function(value) {
      return '' + self.toSI(value).toFixed(frac) + unitNameSI;
    };

    /**
     * Returns the given value as non-SI-unit-string e.g. '10ft'.
     * @method asString
     * @return The given value as string.
     */
    this.asString = function(value) {
      return '' + self.fromSI(value).toFixed(frac) + unitName;
    };
  };

  exports.NONE = new exports.Converter(1.0, 1, '', '');
  exports.PERCENT = new exports.Converter(0.01, 1, '', '%');
  exports.LATITUDE = new exports.Converter(1.0, 6, '°', '°');
  exports.LONGITUDE = new exports.Converter(1.0, 6, '°', '°');
  exports.AREA = new exports.Converter(1.0, 1, 'm²', 'm²');
  exports.ACCEL = new exports.Converter(1.0, 1, 'm/s²', 'm/s²');
  exports.SPEED = new exports.Converter(1.0, 1, 'm/s', 'm/s');
  exports.DISTANCE = new exports.Converter(1.0, 1, 'm', 'm');
  exports.ROTACCEL = new exports.Converter(1.0, 1, 'rad/s²', 'rad/s²');
  exports.ROTSPEED = new exports.Converter(1.0, 1, 'rad/s', 'rad/s');
  exports.DIRECTION = new exports.Converter(Math.PI / 180.0, 1, 'rad', '°');
  exports.PRESSURE = new exports.Converter(1.0, 1, 'hPa', 'hPa');
  exports.ALTITUDE = new exports.Converter(1.0, 1, 'm', 'm');
  exports.DIAMETER = new exports.Converter(1.0, 1, 'm', 'm');
  exports.RADIUS = new exports.Converter(1.0, 1, 'm', 'm');
  exports.LENGTH = new exports.Converter(1.0, 1, 'm', 'm');
  exports.FREQUENCY = new exports.Converter(1.0, 1, 'Hz', 'Hz');
  exports.POWER = new exports.Converter(1.0, 1, 'W', 'W');
  exports.WEIGHT = new exports.Converter(1.0, 1, 'kg', 'kg');
  exports.RELTIME = new exports.Converter(1.0, 1, 's', 's');
  exports.ABSTIME = new exports.Converter(1.0, 1, 's', 's');


})(typeof exports === 'undefined'? this.units={}: exports);


