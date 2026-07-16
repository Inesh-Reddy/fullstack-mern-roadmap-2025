const url =
  "https://api.weatherapi.com/v1/current.json?key=d19009dc091c46f38f173759252703&q=kuwait&aqi=yes";

const fetchWeatherField = async (url) => {
  const result = await fetch(url);
  return await result.json();
};

async function main() {
  const weather = await fetchWeatherField(url);
  console.log(weather);

  const dataBlock = document.createElement("h2");
  const icon = document.createElement("img");
  dataBlock.textContent = `${weather.location.name} - ${weather.current.temp_c}°C `;
  icon.src = `https:${weather.current.condition.icon}`;
  document.body.appendChild(dataBlock);
  document.body.appendChild(icon);
}

main();
