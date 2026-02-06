const apiKey = "105152bca5d36b6f2751946964b7a623"; // replace this
//Asynchronous function
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please Enter a City Name");  
    return; 
  }  
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
 
  try {
    const response = await fetch(url); 

    if (!response.ok) {
      throw new Error(`City is not found or Invalid API keys (${response.status})`);
    }
 
    const data = await response.json(); 

    const weatherData = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherData;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color: yellow;">${error.message}</p>`;
  }
} 
