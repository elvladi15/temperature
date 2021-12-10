const prompt = require("prompt-sync")();
const { SCALES, Temperature } = require("elvladi15-temperature-converter");

function main() {
  console.clear();
  console.log("Welcome to the temperature converter");
  console.log("\nPlease select a scale:");
  console.log("\n1. Celcius");
  console.log("2. Fahrenheit");
  console.log("3. Kelvin");
  const option = prompt("\nChoose a number from 1 to 3: ");
  if (option === "1") {
    chooseNumber(SCALES.CELCIUS);
  } else if (option === "2") {
    chooseNumber(SCALES.FAHRENHEIT);
  } else if (option === "3") {
    chooseNumber(SCALES.KELVIN);
  } else {
    console.log("Please enter a number from 1 to 3");
    prompt();
    main();
  }
}
function chooseNumber(scale) {
  console.clear();
  let number = prompt(`Please enter a number in the ${scale} scale: `);
  number = parseFloat(number);
  try {
    const temperature = new Temperature(number, scale);
    chooseConvertScale(temperature);
  } catch (err) {
    console.log("Please enter a valid number.");
    prompt();
    chooseNumber(scale);
  }
}
function chooseConvertScale(temperature) {
  console.clear();
  console.log("Please choose to what scale you want to convert: ");
  console.log("\n1. Celsius");
  console.log("2. Fahrenheit");
  console.log("3. Kelvin");
  const option = prompt("\nChoose an option from 1 to 3: ");
  let result;
  const temperatureScale =
    temperature.scale === SCALES.CELCIUS
      ? "C"
      : temperature.scale === SCALES.FAHRENHEIT
      ? "F"
      : "K";
  try {
    if (option === "1") {
      result = Temperature.toCelcius(temperature);
      console.log(
        `${temperature.number}°${temperatureScale} to celcius equals ${result}°C`
      );
    } else if (option === "2") {
      result = Temperature.toFahrenheit(temperature);
      console.log(
        `${temperature.number}°${temperatureScale} to fahrenheit equals ${result}°F`
      );
    } else if (option === "3") {
      result = Temperature.toKelvin(temperature);
      console.log(
        `${temperature.number}°${temperatureScale} to kelvin equals ${result}°K`
      );
    } else {
      console.log("Please enter a number from 1 to 3");
      prompt();
      chooseConvertScale(temperature);
    }
  } catch (err) {
    console.log(
      `Cannot convert from ${temperature.scale} to ${temperature.scale}. Please select another scale.`
    );
    prompt();
    chooseConvertScale(temperature);
  }
}
main();
