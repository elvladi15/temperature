describe("to-celcius methods", () => {
  it("Validate that 80°F equals 26.7°C", () => {
    const temperature = new Temperature(80, SCALES.FAHRENHEIT);
    assert.equal(Temperature.toCelcius(temperature), 26.7);
  });
  it("Validate that 300°K equals 26.9°C", () => {
    const temperature = new Temperature(300, SCALES.KELVIN);
    assert.equal(Temperature.toCelcius(temperature), 26.9);
  });
});
describe("to-fahrenheit methods", () => {
  it("Validate that 36°C equals 96.8°F", () => {
    const temperature = new Temperature(36, SCALES.CELCIUS);
    assert.equal(Temperature.toFahrenheit(temperature), 96.8);
  });
  it("Validate that 350°K equals 170.3°F", () => {
    const temperature = new Temperature(350, SCALES.KELVIN);
    assert.equal(Temperature.toFahrenheit(temperature), 170.3);
  });
});
describe("to-kelvin methods", () => {
  it("Validate that 40°C equals 313.2°K", () => {
    const temperature = new Temperature(40, SCALES.CELCIUS);
    assert.equal(Temperature.toKelvin(temperature), 313.2);
  });
  it("Validate that 95°F equals 308.2°K", () => {
    const temperature = new Temperature(95, SCALES.FAHRENHEIT);
    assert.equal(Temperature.toKelvin(temperature), 308.2);
  });
});
