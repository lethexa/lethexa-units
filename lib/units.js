/* global exports */

(function(exports) {
  'use strict';

  var Converter = function(factorToSI) {
    this.setFactorToSI = function(factor) {
      factorToSI = factor;
    };

    this.toSI = function(value) {
      return value * factorToSI;
    };

    this.fromSI = function(value) {
      return value / factorToSI;
    };
  };

  exports.LENGTH = new Converter(1.0);
  exports.DISTANCE = new Converter(1.0);

})(typeof exports === 'undefined'? this.units={}: exports);


