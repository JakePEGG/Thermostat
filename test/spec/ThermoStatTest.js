'use strict';

describe('Thermostat', function() {

var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases the temperature with up()"), function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  }

  it("it decreases the temparture with down()"), function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  }

  it("Sets the minimum temperature as 10"), function() {
    thermostat.minimum();
    expect(thermostat.getCurrentTemperature()).toBe(>10)
  }
});
