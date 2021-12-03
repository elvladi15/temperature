const SCALES = {
  CELCIUS: "celcius",
  FAHRENHEIT: "fahrenheit",
  KELVIN: "kelvin",
};
class Temperature {
  constructor(number, scale) {
    this.number = number;
    this.scale = scale;
  }
  static toCelcius(temperature) {
    if (temperature.scale === SCALES.FAHRENHEIT) {
      return Math.round((5 / 9) * (temperature.number - 32) * 10) / 10;
    } else if (temperature.scale === SCALES.KELVIN) {
      return Math.round((temperature.number - 273.15) * 10) / 10;
    }
  }
  static toFahrenheit(temperature) {
    if (temperature.scale === SCALES.CELCIUS) {
      return Math.round(((9 / 5) * temperature.number + 32) * 10) / 10;
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
    }
  }
}
