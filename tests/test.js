describe("Temperature creation methods", () => {
  it("Validate that a temperature with scale celsius and number 30 is a valid temperature", () => {
    const temperature1 = new Temperature(30, SCALES.CELCIUS);
    assert.equal(temperature1.number, 30);
    assert.equal(temperature1.scale, SCALES.CELCIUS);
  });
  it("Validate that a temperature with scale faherenheit and number 30 is a valid temperature", () => {
    const temperature1 = new Temperature(-50, SCALES.FAHRENHEIT);
    assert.equal(temperature1.number, -50);
    assert.equal(temperature1.scale, SCALES.FAHRENHEIT);
  });
  it("Validate that a temperature with scale kelvin and number 30 is a valid temperature", () => {
    const temperature1 = new Temperature(30, SCALES.KELVIN);
    assert.equal(temperature1.number, 30);
    assert.equal(temperature1.scale, SCALES.KELVIN);
  });
  it("Validate that a temperature with scale celsius and number 'a' throws a temperature creation error", () => {
    expect(() => {
      const temperature1 = new Temperature("a", SCALES.CELCIUS);
    }).to.throw("Error during temperature creation.");
  });
  it("Validate that a temperature with scale not being either celcius, fahrenheit or kelvin and number 50 throws a temperature creation error", () => {
    expect(() => {
      const temperature1 = new Temperature(50, "c");
    }).to.throw("Error during temperature creation.");
  });
});

describe("to-celcius methods", () => {
  it("Validate that 30°C throws a conversion error", () => {
    const temperature1 = new Temperature(30, SCALES.CELCIUS);
    expect(() => {
      Temperature.toCelcius(temperature1);
    }).to.throw("Cannot convert from celsius to celcius");
  });
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
  it("Validate that 36°F throws a conversion error", () => {
    const temperature = new Temperature(36, SCALES.FAHRENHEIT);
    expect(() => {
      Temperature.toFahrenheit(temperature);
    }).to.throw("Cannot convert from fahrenheit to fahrenheit");
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
  it("Validate that 200°K throws a conversion error", () => {
    const temperature = new Temperature(200, SCALES.KELVIN);
    expect(() => {
      Temperature.toKelvin(temperature);
    }).to.throw("Cannot convert from kelvin to kelvin");
  });
});
