'use strict';

//
// function Powersave() {
//   this._temperature =< 25
// }


function Thermostat() {
  this._temperature = 20
}



Thermostat.prototype = {
  getCurrentTemperature: function() {
    return this._temperature;
  },
  up: function() {
      this.getCurrentTemperaturetemperate += 1;
  },
  down: function() {
      this.getCurrentTemperature +-1
  },
  minimum: function() {
    this.getCurrentTemperature >= 10
  }

}









// Thermostat.prototype.getCurrentTemperature = function() {
//   return this._temperature;
// };
//
// Thermostat.prototype.up = function() {
//     this.getCurrentTemperaturetemperate += 1;
// }
// Thermostat.prototype.down = function() {
//     this.getCurrentTemperature +-1
// }
//  Thermostat.prototype.minimum = function() {
//    this.getCurrentTemperature >= 10
//  }
