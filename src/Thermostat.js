'use strict';

function Thermostat() {
  this._temperature = 20
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
    this.getCurrentTemperaturetemperate += 1;
}
Thermostat.prototype.down = function() {
    this.getCurrentTemperature +-1
}
 Thermostat.prototype.minimum = function() {
   this.getCurrentTemperature >= 10 
 }
