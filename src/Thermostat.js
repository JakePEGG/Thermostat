'use strict';

//
// function Powersave() {
//   this._temperature =< 25
// }


function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
  this.powerSavingMode = true;
}



Thermostat.prototype = {
  getCurrentTemperature: function() {
    return this._temperature;
  },
  up: function() {
    console.log(this)
      this._temperature += 1;
  },
  down: function() {
    if(this._temperature <= this.MINIMUM_TEMPERATURE) {
      return;
    }
      this._temperature -= 1
  },
  minimum: function() {
    this.getCurrentTemperature() >= 10
  },
  isMinimumTemperature: function() {
    return this._temperature === this.MINIMUM_TEMPERATURE;
  },
  isPowerSavingModeOn: function() {
    return this.powerSavingMode === true;
  },
  switchPowerSavingModeOff: function() {
    this.powerSavingMode = false; 
  }
}


// // if temp will be below 10
// //  throw 'message'
//
// var newTemp = this._temperature - reduce
// if newTemp < 10  {
//   throw 'message'
// }
// else {
//   do the thing
// }







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
