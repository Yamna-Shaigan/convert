
document.getElementById('convert').addEventListener('click', convertCelsiusToFahrenheit);

function convertCelsiusToFahrenheit() {
  let celsius = parseFloat(document.getElementById('celsius').value);

  if (isNaN(celsius)) {
    document.getElementById('result').innerHTML = 'Invalid input!';
  } else {
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = `${celsius}°C is equal to ${fahrenheit}°F`;
  }
}

