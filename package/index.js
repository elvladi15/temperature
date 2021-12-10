module.exports.SCALES = SCALES = {
  CELCIUS: "celcius",
  FAHRENHEIT: "fahrenheit",
  KELVIN: "kelvin",
};
module.exports.Temperature = class Temperature {
  constructor(number, scale) {
    const validNumber = typeof number === "number" && !isNaN(number);
    const validScale =
      scale === SCALES.CELCIUS ||
      scale === SCALES.FAHRENHEIT ||
      scale === SCALES.KELVIN;
    if (validNumber && validScale) {
      this.number = number;
      this.scale = scale;
    } else {
      throw new Error("Error during temperature creation.");
    }
  }
  static toCelcius(temperature) {
    if (temperature.scale === SCALES.CELCIUS) {
      throw new Error("Cannot convert from celsius to celcius");
    } else if (temperature.scale === SCALES.FAHRENHEIT) {
      return Math.round((5 / 9) * (temperature.number - 32) * 10) / 10;
    } else if (temperature.scale === SCALES.KELVIN) {
      return Math.round((temperature.number - 273.15) * 10) / 10;
    }
  }
  static toFahrenheit(temperature) {
    if (temperature.scale === SCALES.CELCIUS) {
      return Math.round(((9 / 5) * temperature.number + 32) * 10) / 10;
    } else if (temperature.scale === SCALES.FAHRENHEIT) {
      throw new Error("Cannot convert from fahrenheit to fahrenheit");
    } else if (temperature.scale === SCALES.KELVIN) {
      return (
        Math.round(((9 / 5) * (temperature.number - 273.15) + 32) * 10) / 10
      );
    }
  }
  static toKelvin(temperature) {
    if (temperature.scale === SCALES.CELCIUS) {
      return Math.round((temperature.number + 273.15) * 10) / 10;
    } else if (temperature.scale === SCALES.FAHRENHEIT) {
      return (
        Math.round(((5 / 9) * (temperature.number - 32) + 273.15) * 10) / 10
      );
    } else if (temperature.scale === SCALES.KELVIN) {
      throw new Error("Cannot convert from kelvin to kelvin");
    }
  }
};
