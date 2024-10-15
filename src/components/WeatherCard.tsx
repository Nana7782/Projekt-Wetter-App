export default function WeatherCard() {
  return (
    <div className="weatherDetail">
      <p className="date">{Weather.date}</p>
      <h2>{weather.weather[0].description}</h2>
      <img
        src={`../src/img/${weather.weather[0].icon}.png`}
        alt="weathericon"
      />

      <h3>{weather.main.temp}°C</h3>
    </div>
  );
}
