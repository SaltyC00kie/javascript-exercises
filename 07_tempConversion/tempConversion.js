const convertToCelsius = function(pTemperature) {

  return Math.round((pTemperature - 32 ) * (5/9) * 10)/10;
};

const convertToFahrenheit = function(pTemperature) {
  return  Math.round(((pTemperature * 1.8)  + 32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
