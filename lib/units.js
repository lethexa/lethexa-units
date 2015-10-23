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

  exports.LENGTH = new exports.Converter(0.3048, 'm', 'ft');

})(typeof exports === 'undefined'? this.units={}: exports);


