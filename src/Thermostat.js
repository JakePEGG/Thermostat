'use strict';


function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.powerSavingMode = true;
  this._defaulttemperature = 20;
}

Thermostat.prototype = {
  getCurrentTemperature: function() {
    return this._temperature;
  },
  up: function() {
    if(this.isMaximumTemperature()) {
      return;
    }
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
  },
  switchPowerSavingModeOn: function() {
    this.powerSavingMode = true;
  },
  isMaximumTemperature: function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
  },
  resetTemperature: function() {
    return this._defaulttemperature
  },
  energyusage: function () {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
  }
}



}



// energyusage: function() {
// if (this.getCurrentTemperature) <= 18
//  return "low energy usage"
// else if (this.getCurrentTemperature) <=25
//  return "medium energy usage"
// else
//  return "high energy usage"
//}

//< 18 is low-usage, < 25 is medium-usage,
//anything else is high-usage.





//
// to be implemented to throw error.
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
//

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
